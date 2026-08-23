import React from 'react';
const LABEL_27291 = 'component_27291';
export function Component27291({ value = 27291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27291, 'data-value': derived.doubled }, children);
}
export default Component27291;
