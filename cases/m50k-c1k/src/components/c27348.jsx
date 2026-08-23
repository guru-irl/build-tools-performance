import React from 'react';
const LABEL_27348 = 'component_27348';
export function Component27348({ value = 27348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27348, 'data-value': derived.doubled }, children);
}
export default Component27348;
