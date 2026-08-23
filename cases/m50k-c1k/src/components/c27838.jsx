import React from 'react';
const LABEL_27838 = 'component_27838';
export function Component27838({ value = 27838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27838, 'data-value': derived.doubled }, children);
}
export default Component27838;
