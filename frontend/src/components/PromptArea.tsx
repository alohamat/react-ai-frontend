import { useEffect, useRef } from 'react';

type PromptDivProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onEnter?: () => void;
};

function PromptDiv({ value, onChange, onEnter }: PromptDivProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (onEnter) onEnter();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className="w-[75vw] lg:w-[60vw] 2xl:w-[50vw] p-4
        text-white rounded-2xl focus:shadow-[0px_0px_30px_5px] shadow-black bg-gray-800
        transition-all ease-in-out duration-300 resize-none
        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900
        min-h-[5vh] max-h-[30vh]"
      placeholder="Type your message..."
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      rows={1}
    />
  );
}

export default PromptDiv;
