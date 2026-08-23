import React from 'react';
const LABEL_27932 = 'component_27932';
export function Component27932({ value = 27932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27932, 'data-value': derived.doubled }, children);
}
export default Component27932;
