import React from 'react'
import { Accordion } from 'flowbite-react'

const Acc = () => {
  return (
    <>
      <Accordion collapseAll>

  <Accordion.Panel className="gap-4">
    <Accordion.Title className="px-5 bg-gray-900 hover:bg-gray-700">
      <h2 className="text-netWhite font-bold">What is Netflix?</h2>
    </Accordion.Title>
    <hr className="text-black"/>
    <Accordion.Content className="bg-gray-700 px-5">
    
      <p className="mb-2 text-netWhite font-medium">
        <p>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,
         documentaries, and more on thousands of internet-connected devices.
        </p>
      </p>
      <p className="mb-2 text-netWhite font-medium">
        <p>
        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. 
        There's always something new to discover and new TV shows and movies are added every week!
        </p>
      </p>

    </Accordion.Content>
  </Accordion.Panel>


  <Accordion.Panel className="gap-4">
    <Accordion.Title className="px-5 bg-gray-900 hover:bg-gray-700">
      <h2 className="text-netWhite font-bold">How much does Netflix cost?</h2>
    </Accordion.Title>
    <hr className="text-black"/>
    <Accordion.Content className="bg-gray-700 px-5">
    
      <p className="mb-2 text-netWhite font-medium">
        <p>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.
         Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
        </p>
      </p>

    </Accordion.Content>
  </Accordion.Panel>


  
  <Accordion.Panel className="gap-4">
    <Accordion.Title className="px-5 bg-gray-900 hover:bg-gray-700">
      <h2 className="text-netWhite font-bold">Where can I watch?</h2>
    </Accordion.Title>
    <hr className="text-black"/>
    <Accordion.Content className="bg-gray-700 px-5">
    
      <p className="mb-2 text-netWhite font-medium">
        <p>
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com 
        from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs,
         smartphones, tablets, streaming media players and game consoles.
        </p>
      </p>
      <p className="mb-2 text-netWhite font-medium">
        <p>
        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch 
        while you're on the go and without an internet connection. Take Netflix with you anywhere.
        </p>
      </p>

    </Accordion.Content>
  </Accordion.Panel>


  <Accordion.Panel className="gap-4">
    <Accordion.Title className="px-5 bg-gray-900 hover:bg-gray-700">
      <h2 className="text-netWhite font-bold">How don I cancel?</h2>
    </Accordion.Title>
    <hr className="text-black"/>
    <Accordion.Content className="bg-gray-700 px-5">
    
      <p className="mb-2 text-netWhite font-medium">
        <p>
        Netflix is flexible. There are no pesky contracts and no commitments.
         You can easily cancel your account online in two clicks.
         There are no cancellation fees – start or stop your account anytime.
        </p>
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel className="gap-4">
    <Accordion.Title className="px-5 bg-gray-900 hover:bg-gray-700">
      <h2 className="text-netWhite font-bold">What can I watch on Netflix?</h2>
    </Accordion.Title>
    <hr className="text-black"/>
    <Accordion.Content className="bg-gray-900 px-5">
    
      <p className="mb-2 text-netWhite font-medium">
        <p>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
        award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
        </p>
      </p>

    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel className="gap-4">
    <Accordion.Title className="px-5 bg-gray-900 hover:bg-gray-700">
      <h2 className="text-netWhite font-bold">Is Netflix good for kids?</h2>
    </Accordion.Title>
    <hr className="text-black"/>
    <Accordion.Content className="bg-gray-900 px-5">
    
      <p className="mb-2 text-netWhite font-medium">
        <p>
        The Netflix Kids experience is included in your membership to
         give parents control while kids enjoy family-friendly TV shows and movies in their own space.
        </p>
      </p>
      <p className="mb-2 text-netWhite font-medium">
        <p>
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity
         rating of content kids can watch and block specific titles you don’t want kids to see.
        </p>
      </p>

    </Accordion.Content>
  </Accordion.Panel>


      </Accordion>
    </>
  )
}

export default Acc