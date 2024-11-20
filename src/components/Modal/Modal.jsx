import React from 'react';

const Modal = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
       console.log(e)
    }
    return (
        <div>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <form action="" onSubmit={handleSubmit}>
    <div className='space-y-4'>
    <div>
        First Name:
    <input
  type="text"
  placeholder="first name"
  className="input input-bordered input-primary w-full max-w-xs"
  name="Fname" />
    </div>

    <div>
        Email:
    <input
  type="email"
  placeholder="email address"
  className="input input-bordered input-primary w-full max-w-xs" name='email' />
    </div>
    <div>
        Phone Number :
    <input
  type="number"
  placeholder="phone number"
  className="input input-bordered input-primary w-full max-w-xs" name='phone' />
    </div>
    <div>
        address:
    <input
  type="text"
  placeholder="address"
  className="input input-bordered input-primary w-full max-w-xs" name='address'/>
    </div>

  </div>
  <div className='text-center mt-4'>
  <button className='btn btn-primary' type='submit'>Login Please</button>
  </div>
 
    </form>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
     </div>
    );
};

export default Modal;