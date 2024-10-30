import { useRef } from "react"

export default({addKaro})=>{

    let nameRef = useRef();
    let cityRef = useRef();

    const addData = ()=>{

        let user = {
            name:nameRef.current.value,
            city:cityRef.current.value
        }

        addKaro(user);

    }

    return <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        <input ref={nameRef} placeholder="Name" /> <br />
        <input ref={cityRef}  placeholder="City" /> <br />

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button onClick={addData}  type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

}