import React from 'react';
const LABEL_29189 = 'component_29189';
export function Component29189({ value = 29189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29189, 'data-value': derived.doubled }, children);
}
export default Component29189;
