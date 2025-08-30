import React, { useState, useRef, useEffect } from 'react';

function PromptDiv() {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      console.log("Texto enviado:", text);
      setText('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  return (
    <div className="flex items-center justify-center p-4">
      <textarea
        ref={textareaRef}
        className="w-[75vw] lg:w-[60vw] 2xl:w-[50vw] p-4
          text-white rounded-2xl focus:shadow-[0px_0px_30px_5px] shadow-black bg-gray-800
          transition-all ease-in-out duration-300 resize-none
          overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900
          min-h-[5vh] max-h-[30vh]"
        placeholder="Type your message..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        rows={1}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-3 ml-2 rounded-xl
          transition-all ease-in-out duration-300 text-lg font-semibold"
      >
        Send
      </button>
    </div>
  );
}

export default PromptDiv;
