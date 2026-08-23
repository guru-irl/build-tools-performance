import React from 'react';
const LABEL_27245 = 'component_27245';
export function Component27245({ value = 27245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27245, 'data-value': derived.doubled }, children);
}
export default Component27245;
