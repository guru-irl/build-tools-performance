import React from 'react';
const LABEL_27408 = 'component_27408';
export function Component27408({ value = 27408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27408, 'data-value': derived.doubled }, children);
}
export default Component27408;
