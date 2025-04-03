import React from 'react'

function Form() {
  return (
    <section>
        <form id="contact">
            <div class="form">
                <h1>Contactez-nous</h1>
            </div>
            <div class="géneral">
                <label>Nom</label>
            
                <input type="text" placeholder='Your fucking name' />
                <br />
                <label>Prenom</label>
                
                <input type="text" placeholder='Your fucking prenom' />
                <br />
                <label>Numero</label>
                
                <input type="number" placeholder='Your fucking Phone number' />
                <br />
                <label>E-mail</label>
                
                <input type="text" placeholder='Your fucking mail' />
                <br />
                <label>Suggestions</label>
                <br />
                <textarea name="bern" id="ok" cols="30" rows="10" placeholder='Mon frère fais moi par de ton expértience avec nous'></textarea>
                </div>
                <div class="envoi">
                    <button type='submit'>Envoyez</button>
                </div>
        </form>
    </section>
    
  )
}

export default Form