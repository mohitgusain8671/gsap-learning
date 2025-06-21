import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const GsapTimeline = () => {
  // TODO: Implement the gsap timeline
  const timeline = gsap.timeline({
    repeat: -1, // Infinite repeat
    repeatDelay: 1, // Delay before repeating
    yoyo: true, // Reverse the animation on repeat
  })

  useGSAP(()=>{
    timeline.to("#yellow-box", {
      x: 300, // Move the box to the right
      duration: 1, // Duration of the animation
      ease: "power1.inOut", // Easing function for smoothness
    })
    .to("#yellow-box", {
      rotation: 360, // Rotate the box
      duration: 1, // Duration of the rotation
      ease: "power1.inOut" // Easing function for smoothness
    })
    .to("#yellow-box", {
      scale: 0.5, // Scale down the box
      duration: 1, // Duration of the scaling
      ease: "power1.inOut", // Easing function for smoothness
    })
    .to("#yellow-box", {
      scale: 1, // Scale back to original size
      duration: 1, // Duration of the scaling back
      ease: "bounce.out", // Easing function for smoothness
    })
    .to("#yellow-box", {
      borderRadius: '100%', // Move the box back to the original position
      duration: 1, // Duration of the animation
      ease: "bounce.in", // Easing function for smoothness
    });
  })
  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <button onClick={() => {
          if(timeline.paused()){
            timeline.play();
          } else {
            timeline.pause();
          }
        }}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
