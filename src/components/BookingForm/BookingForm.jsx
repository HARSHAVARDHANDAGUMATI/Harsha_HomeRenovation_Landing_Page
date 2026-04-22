import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const MotionDiv = motion.div
const MotionForm = motion.form

function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      guests: '2 Guests',
      date: '',
      time: '7:30 PM',
      note: '',
    },
  })

  const onSubmit = (values) => {
    toast.success(`Table request received for ${values.name}`)
    reset()
  }

  return (
    <section className="section" id="booking">
      <div className="container booking-grid">
        <MotionDiv
          className="section-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Table booking</p>
          <h2>Elegant reservation UI for a polished user journey.</h2>
          <p>
            This form is intentionally front-end only, designed to showcase a
            refined booking flow, strong spacing, clear input hierarchy, and
            responsive usability across devices.
          </p>
        </MotionDiv>

        <MotionForm
          className="booking-form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <label>
            Full Name
            <input
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name ? <span>{errors.name.message}</span> : null}
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              placeholder="Enter your number"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone ? <span>{errors.phone.message}</span> : null}
          </label>

          <label>
            Guests
            <select {...register('guests')}>
              <option>2 Guests</option>
              <option>4 Guests</option>
              <option>6 Guests</option>
              <option>8+ Guests</option>
            </select>
          </label>

          <label>
            Date
            <input
              type="date"
              {...register('date', { required: 'Please select a date' })}
            />
            {errors.date ? <span>{errors.date.message}</span> : null}
          </label>

          <label>
            Preferred Time
            <select {...register('time')}>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
              <option>8:30 PM</option>
              <option>9:00 PM</option>
            </select>
          </label>

          <label className="booking-form__full">
            Special Note
            <textarea
              rows="4"
              placeholder="Anniversary, window seating, dietary request..."
              {...register('note')}
            />
          </label>

          <button type="submit" className="button booking-form__submit">
            Confirm Reservation
          </button>
        </MotionForm>
      </div>
    </section>
  )
}

export default BookingForm
