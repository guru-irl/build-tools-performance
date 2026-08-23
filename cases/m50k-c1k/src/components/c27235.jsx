import React from 'react';
const LABEL_27235 = 'component_27235';
export function Component27235({ value = 27235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27235, 'data-value': derived.doubled }, children);
}
export default Component27235;
