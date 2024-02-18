import {  useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function CV() {
  const [editMode, setEditMode] = useState(false);

  function printDocument() {
    const input = document.getElementById('cv');
    html2canvas(input, {
      width: 640,
    height: 970,
    x: -70,
    scale: 1
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  return (
    <div className="relative grid w-full min-h-screen pb-2 font-serif bg-slate-100 place-items-center">
      <main id="cv" className="p-8 bg-white h-max w-[40rem]">
        <h1
          suppressContentEditableWarning={true}
          contentEditable={editMode ? true : false}
          className={`${
            editMode ? " border-blue-300 focus:outline-blue-300" : "border-transparent"
          } border-b  bg-transparent w-full text-2xl font-bold `}
        >
          Elon Musk
        </h1>
        <p
          suppressContentEditableWarning={true}
          contentEditable={editMode ? true : false}
          className={`${
            editMode
              ? " border-blue-300 focus:outline-blue-300"
              : "border-transparent"
          } border-b  bg-transparent w-full mb-5 text-lg`}
        >
          CEO of Tesla Motors
        </p>
        <div className="grid grid-cols-2 mb-5 text-sm gap-x-4 gap-y-2">
          <div>
            <h4 className="block font-bold">Address</h4>
            <div
              suppressContentEditableWarning={true}
              contentEditable={editMode ? true : false}
              className={`${
                editMode
                  ? " border-blue-300 focus:outline-blue-300"
                  : "border-transparent"
              } border-b bg-transparent w-full max-h-max`}
            >
              3500 Deer Creek Road, Palo Alto, CA 94304 United States
            </div>
          </div>
          <div>
            <h4 className="block font-bold">LinkedIn</h4>{" "}
            <div
              suppressContentEditableWarning={true}
              contentEditable={editMode ? true : false}
              className={`${
                editMode
                  ? " border-blue-300 focus:outline-blue-300"
                  : "border-transparent"
              } border-b bg-transparent w-full max-h-max`}
            >
              linkedIn.com/in/SpaceX
            </div>
          </div>
          <div>
            <h4 className="block font-bold">Phone</h4>
            <div
              suppressContentEditableWarning={true}
              contentEditable={editMode ? true : false}
              className={`${
                editMode
                  ? " border-blue-300 focus:outline-blue-300"
                  : "border-transparent"
              } border-b bg-transparent w-full max-h-max`}
            >
              {" "}
              310-363-6000
            </div>
          </div>
          <div>
            <h4 className="block font-bold">Facebook</h4>{" "}
            <div
              suppressContentEditableWarning={true}
              contentEditable={editMode ? true : false}
              className={`${
                editMode
                  ? " border-blue-300 focus:outline-blue-300"
                  : "border-transparent"
              } border-b bg-transparent w-full max-h-max`}
            >
              facebook.com/elonmusk
            </div>
          </div>
          <div>
            <h4 className="block font-bold">E-mail</h4>{" "}
            <div
              suppressContentEditableWarning={true}
              contentEditable={editMode ? true : false}
              className={`${
                editMode
                  ? " border-blue-300 focus:outline-blue-300"
                  : "border-transparent"
              } border-b bg-transparent w-full max-h-max`}
            >
              elon@tesla.com
            </div>
          </div>
        </div>
        <p 
         suppressContentEditableWarning={true}
         contentEditable={editMode ? true : false}
         className={`${
           editMode
             ? " border-blue-300 focus:outline-blue-300"
             : "border-transparent"
         } border-b bg-transparent w-full mb-5 text-sm max-h-max`}
        >
          Elon Musk is the CEO and co-founder of SpaceX, Tesla, Neuralink and
          The Boring Company. As lead designer at SpaceX, Elon oversees the
          development of rockets and spacecraft for missions to Earth orbit and
          ultimately to other planets.
        </p>
        <div className="mt-8">
          <h2 className="p-2 text-xl font-bold border-b">Education</h2>
          <div className="flex mt-2 text-sm gap-x-4">
            <span 
            suppressContentEditableWarning={true}
            contentEditable={editMode ? true : false}
            className={`${
              editMode
                ? " border-blue-300 focus:outline-blue-300"
                : "border-transparent"
            } border-b bg-transparent text-xs font-semibold w-max h-max`}
            >
              2050-08 - 2058-05
            </span>
            <div className="flex-1">
              <p 
              suppressContentEditableWarning={true}
              contentEditable={editMode ? true : false}
              className={`${
                editMode
                  ? " border-blue-300 focus:outline-blue-300"
                  : "border-transparent"
              } border-b bg-transparent text-base font-bold`}
              >
                Bachelor's degrees in physics and economics
              </p>
              <p 
              suppressContentEditableWarning={true}
              contentEditable={editMode ? true : false}
              className={`${
                editMode
                  ? " border-blue-300 focus:outline-blue-300"
                  : "border-transparent"
              } border-b bg-transparent text-xs italic`}
              >
                University of Pennsylvania, <span>Philadelphia - USA</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="p-2 text-xl font-bold border-b ">Work Experience</h2>
          <div className="flex mt-2 text-sm gap-x-4">
            <span 
             suppressContentEditableWarning={true}
             contentEditable={editMode ? true : false}
             className={`${
               editMode
                 ? " border-blue-300 focus:outline-blue-300"
                 : "border-transparent"
             } border-b bg-transparent text-xs font-semibold h-max`}
            >
              2008-08 - 2016-05
            </span>
            <div className="flex-1">
              <p 
               suppressContentEditableWarning={true}
               contentEditable={editMode ? true : false}
               className={`${
                 editMode
                   ? " border-blue-300 focus:outline-blue-300"
                   : "border-transparent"
               } border-b bg-transparent text-base font-bold`}
              >Tesla.</p>
              <p 
              suppressContentEditableWarning={true}
              contentEditable={editMode ? true : false}
              className={`${
                editMode
                  ? " border-blue-300 focus:outline-blue-300"
                  : "border-transparent"
              } border-b bg-transparent text-xs italic`}
             >Silicon Valley - USA</p>
              <p
                suppressContentEditableWarning={true}
                contentEditable={editMode ? true : false}
                className={`${
                  editMode
                    ? " border-blue-300 focus:outline-blue-300"
                    : "border-transparent"
                } border-b bg-transparent mt-3`}
              >
                n 2004, he became an early investor in electric vehicle
                manufacturer Tesla Motors, Inc. (now Tesla, Inc.). He became its
                chairman and product architect, assuming the position of CEO in
                2008. In 2006, Musk helped create SolarCity, a solar-energy
                company that was acquired by Tesla in 2016 and became Tesla
                Energy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute space-x-4 bottom-10">
      <button
      className={`${editMode ? "bg-green-400" : " bg-blue-400"} w-44 px-8 py-2 rounded-md active:scale-95`}
      onClick={() => setEditMode((draft) => !draft)}>{editMode ? 'Save changes' : 'Edit'}</button>
      <button onClick={printDocument} className="px-8 py-2 text-white rounded-md bg-slate-800 w-44 active:scale-95">Download</button>
      </div>
    </div>
  );
}
