import React from 'react';
const LABEL_27868 = 'component_27868';
export function Component27868({ value = 27868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27868, 'data-value': derived.doubled }, children);
}
export default Component27868;
