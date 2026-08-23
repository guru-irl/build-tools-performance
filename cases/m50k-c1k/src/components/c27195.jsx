import React from 'react';
const LABEL_27195 = 'component_27195';
export function Component27195({ value = 27195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27195, 'data-value': derived.doubled }, children);
}
export default Component27195;
