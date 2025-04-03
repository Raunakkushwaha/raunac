import React from 'react';

// Gradient mapping for different colors
const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  yellow: "linear-gradient(hsl(45, 100%, 50%), hsl(60, 100%, 50%))",
  pink: "linear-gradient(hsl(330, 90%, 60%), hsl(340, 90%, 60%))",
  teal: "linear-gradient(hsl(180, 50%, 50%), hsl(190, 50%, 50%))",
  brown: "linear-gradient(hsl(15, 40%, 40%), hsl(25, 40%, 40%))",
  cyan: "linear-gradient(hsl(180, 100%, 40%), hsl(200, 100%, 40%))",
  gray: "linear-gradient(hsl(0, 0%, 50%), hsl(0, 0%, 40%))",
  gold: "linear-gradient(hsl(50, 80%, 40%), hsl(40, 80%, 40%))",
  lavender: "linear-gradient(hsl(260, 50%, 60%), hsl(270, 50%, 60%))",
  coral: "linear-gradient(hsl(10, 70%, 60%), hsl(20, 70%, 60%))",
  slate: "linear-gradient(hsl(210, 20%, 40%), hsl(220, 20%, 40%))",
  mint: "linear-gradient(hsl(150, 50%, 60%), hsl(160, 50%, 60%))",
  peach: "linear-gradient(hsl(30, 100%, 70%), hsl(20, 100%, 70%))",
};

// GlassIcons component
const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div 
      className={`grid gap-[3em] grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 mx-auto py-[3em] overflow-visible ${className || ''}`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${item.customClass || ''}`}
        >
          {/* Back layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          {/* Front layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center" aria-hidden="true">
              <i className={item.icon} style={{ fontSize: '1.8em' }}></i>
            </span>
          </span>

          {/* Label */}
          <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

// Example usage of GlassIcons component with custom items (20 icons)
const Skills = () => {
  const items = [
    { icon: 'fas fa-laptop-code', color: 'blue', label: 'Web Dev' },
    { icon: 'fab fa-js', color: 'yellow', label: 'JavaScript' },
    { icon: 'fab fa-react', color: 'cyan', label: 'React' },
    { icon: 'fab fa-node-js', color: 'green', label: 'Node.js' },
    { icon: 'fas fa-database', color: 'red', label: 'Database' },
    { icon: 'fab fa-html5', color: 'orange', label: 'HTML' },
    { icon: 'fab fa-css3-alt', color: 'indigo', label: 'CSS' },
    { icon: 'fab fa-git', color: 'gray', label: 'Git' },
    { icon: 'fab fa-github', color: 'black', label: 'GitHub' },
    { icon: 'fas fa-cloud', color: 'teal', label: 'Cloud' },
    { icon: 'fas fa-cogs', color: 'gold', label: 'Tools' },
    { icon: 'fas fa-code', color: 'blue', label: 'Programming' },
    { icon: 'fas fa-desktop', color: 'lavender', label: 'Design' },
    { icon: 'fas fa-paint-brush', color: 'peach', label: 'UI/UX' },
    { icon: 'fab fa-java', color: 'purple', label: 'Java' },
    { icon: 'fas fa-video', color: 'coral', label: 'Video Editing' },
    { icon: 'fas fa-server', color: 'slate', label: 'Backend' },
    { icon: 'fas fa-laptop', color: 'mint', label: 'Laptop' },
  ];

  return (
    <div id='skills'>
      <br />
     
      <p  className="font-playfair font-semibold text-4xl mt-32 mb-10">
        My <span className="text-red">Skills</span>
      </p>
      <GlassIcons items={items} className="custom-class" />
    </div>
  );
};

export default Skills;
