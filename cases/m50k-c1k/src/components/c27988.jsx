import React from 'react';
const LABEL_27988 = 'component_27988';
export function Component27988({ value = 27988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27988, 'data-value': derived.doubled }, children);
}
export default Component27988;
