import React, { useState } from 'react';
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	Star,
	Shield,
	Award,
	CheckCircle,
	Send,
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		service: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch(
				'https://entrywise.webbound.in/public/submit',
				{
					method: 'POST',
					body: JSON.stringify({
						fields: {
							fullName: formData.name,
							...formData,
						},
					}),
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': import.meta.env.VITE_API_KEY,
					},
				},
			);

			if (!response.ok) {
				throw new Error('Failed to submit form');
			}

			// Reset form
			setFormData({
				name: '',
				email: '',
				phone: '',
				service: '',
				message: '',
			});

			// Show success toast
			toast.success(
				"Thank you for your message! We'll contact you within 2 hours.",
				{
					duration: 5000,
					position: 'top-center',
					style: {
						background: '#1e293b',
						color: '#fff',
						padding: '16px',
						borderRadius: '8px',
					},
					icon: '🎉',
				},
			);
		} catch (error) {
			console.log(error);
			// Show error toast
			toast.error('Something went wrong. Please try again later.', {
				duration: 5000,
				position: 'top-center',
				style: {
					background: '#dc2626',
					color: '#fff',
					padding: '16px',
					borderRadius: '8px',
				},
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='min-h-screen bg-slate-50'>
			{/* Toast Container */}
			<Toaster />

			{/* Hero Section */}
			<div className='relative h-96 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden'>
				{/* Background Pattern */}
				<div className='absolute inset-0 opacity-20'>
					{[...Array(30)].map((_, i) => (
						<div
							key={i}
							className='absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse'
							style={{
								top: `${20 + Math.random() * 60}%`,
								left: `${10 + Math.random() * 80}%`,
								animationDelay: `${Math.random() * 2}s`,
								animationDuration: `${1.5 + Math.random()}s`,
							}}
						/>
					))}
				</div>

				<div className='relative h-full flex items-center'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center'>
						<div className='flex items-center justify-center space-x-2 mb-4'>
							<Star className='w-6 h-6 text-blue-400 fill-current' />
							<span className='text-blue-300 font-semibold tracking-wide uppercase text-sm'>
								Get In Touch
							</span>
						</div>
						<h1 className='text-4xl lg:text-6xl font-bold text-white mb-6'>
							Contact Orion Pest Control
						</h1>
						<p className='text-xl text-slate-300 max-w-3xl mx-auto'>
							Ready to protect your home? Get your free inspection and
							customized treatment plan today.
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid lg:grid-cols-3 gap-12'>
					{/* Contact Form */}
					<div className='lg:col-span-2'>
						<div className='bg-white rounded-2xl shadow-xl p-8'>
							<div className='mb-8'>
								<h2 className='text-3xl font-bold text-slate-900 mb-4'>
									Get Your Free Quote
								</h2>
								<p className='text-slate-600'>
									Fill out the form below and we'll contact you within 2 hours
									to schedule your free inspection.
								</p>
							</div>

							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-slate-700 mb-2'
										>
											Full Name *
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
											required
											className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
											placeholder='Your full name'
										/>
									</div>
									<div>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-slate-700 mb-2'
										>
											Phone Number *
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											value={formData.phone}
											onChange={handleInputChange}
											required
											className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
											placeholder='(555) 123-4567'
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-slate-700 mb-2'
									>
										Email Address *
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleInputChange}
										required
										className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
										placeholder='your.email@example.com'
									/>
								</div>

								<div>
									<label
										htmlFor='service'
										className='block text-sm font-medium text-slate-700 mb-2'
									>
										Service Needed
									</label>
									<select
										id='service'
										name='service'
										value={formData.service}
										onChange={handleInputChange}
										className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
									>
										<option value=''>Select a service</option>
										<option value='ants'>Ant Control</option>
										<option value='gophers'>Gopher Control</option>
										<option value='bedbugs'>Bed Bug Treatment</option>
										<option value='rats-mice'>Rodent Control</option>
										<option value='cockroaches'>Cockroach Elimination</option>
										<option value='termites'>Termite Protection</option>
										<option value='general'>General Pest Control</option>
										<option value='emergency'>Emergency Service</option>
									</select>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-slate-700 mb-2'
									>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										rows={4}
										className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none'
										placeholder='Tell us about your pest problem or any specific concerns...'
									/>
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 ${
										isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
									}`}
								>
									{isSubmitting ? (
										<>
											<div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
											<span>Sending...</span>
										</>
									) : (
										<>
											<Send className='w-5 h-5' />
											<span>Send Message</span>
										</>
									)}
								</button>
							</form>
						</div>
					</div>

					{/* Contact Information */}
					<div className='space-y-8'>
						{/* Contact Details */}
						<div className='bg-white rounded-2xl shadow-xl p-8'>
							<h3 className='text-2xl font-bold text-slate-900 mb-6'>
								Contact Information
							</h3>
							<div className='space-y-6'>
								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0'>
										<Phone className='w-6 h-6 text-white' />
									</div>
									<div>
										<h4 className='font-semibold text-slate-900 mb-1'>Phone</h4>
										<p className='text-slate-600 mb-1'>+1-408-929-5221</p>
										<p className='text-sm text-blue-600'>
											24/7 Emergency Service
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0'>
										<Mail className='w-6 h-6 text-white' />
									</div>
									<div>
										<h4 className='font-semibold text-slate-900 mb-1'>Email</h4>
										<p className='text-slate-600 mb-1'>
											info@orionpestcontrol.com
										</p>
										<p className='text-sm text-blue-600'>
											Response within 2 hours
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0'>
										<MapPin className='w-6 h-6 text-white' />
									</div>
									<div>
										<h4 className='font-semibold text-slate-900 mb-1'>
											Service Area
										</h4>
										<p className='text-slate-600 mb-1'>Greater Metro Area</p>
										<p className='text-sm text-blue-600'>
											Free service estimates
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0'>
										<Clock className='w-6 h-6 text-white' />
									</div>
									<div>
										<h4 className='font-semibold text-slate-900 mb-1'>
											Business Hours
										</h4>
										<p className='text-slate-600 text-sm'>
											Monday - Friday: 8AM - 6PM
										</p>
										<p className='text-slate-600 text-sm'>
											Saturday: 9AM - 4PM
										</p>
										<p className='text-slate-600 text-sm'>
											Sunday: Emergency Only
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Why Choose Us */}
						<div className='bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white'>
							<h3 className='text-2xl font-bold mb-6'>Why Choose Orion?</h3>
							<div className='space-y-4'>
								<div className='flex items-start space-x-3'>
									<CheckCircle className='w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5' />
									<div>
										<p className='font-semibold'>Free Inspections</p>
										<p className='text-sm text-slate-300'>
											Comprehensive property assessment at no cost
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<Shield className='w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5' />
									<div>
										<p className='font-semibold'>Licensed & Insured</p>
										<p className='text-sm text-slate-300'>
											Full protection for your property
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<Award className='w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5' />
									<div>
										<p className='font-semibold'>15+ Years Experience</p>
										<p className='text-sm text-slate-300'>
											Proven track record of success
										</p>
									</div>
								</div>
								<div className='flex items-start space-x-3'>
									<Star className='w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5' />
									<div>
										<p className='font-semibold'>Satisfaction Guaranteed</p>
										<p className='text-sm text-slate-300'>
											We stand behind our work
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Emergency Contact */}
						<div className='bg-red-50 border-2 border-red-200 rounded-2xl p-6'>
							<h3 className='text-lg font-bold text-red-900 mb-2 flex items-center space-x-2'>
								<Phone className='w-5 h-5' />
								<span>Emergency Service</span>
							</h3>
							<p className='text-red-700 text-sm mb-4'>
								Dealing with a pest emergency? We're available 24/7 for urgent
								situations that can't wait.
							</p>
							<a
								href='tel:555-123-7378'
								className='block w-full bg-red-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-red-700 transition-colors text-center'
							>
								Call Emergency Line
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
