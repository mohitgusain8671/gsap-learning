import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    const blueBox = document.getElementById("blue-box");
    // gsap.to() animates the blue box from its current position to a new position
    // In this case, we are moving the blue box to the right by 300 pixels over 2 seconds
    // gsap.to(selector, vars);
    gsap.to(blueBox, {
      x: 300,
      y: 100,
      rotation: 37,
      scale: 1.5,
      backgroundColor: "red",
      duration: 1,
      ease: "power1.inOut", // This will make the animation smooth
      onComplete: () => {
        console.log("Animation complete!");
      },
      yoyo: true, // This will make the animation reverse back to the original state
      repeat: -1, // This will make the animation repeat indefinitely
      repeatDelay: 1, // This will add a delay of 1 second before the animation repeats
    });
  }, []);
  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
