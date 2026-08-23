import React from 'react';
const LABEL_27157 = 'component_27157';
export function Component27157({ value = 27157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27157, 'data-value': derived.doubled }, children);
}
export default Component27157;
