import React from 'react';
const LABEL_27112 = 'component_27112';
export function Component27112({ value = 27112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27112, 'data-value': derived.doubled }, children);
}
export default Component27112;
