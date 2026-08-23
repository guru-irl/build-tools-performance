import React from 'react';
const LABEL_27226 = 'component_27226';
export function Component27226({ value = 27226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27226, 'data-value': derived.doubled }, children);
}
export default Component27226;
