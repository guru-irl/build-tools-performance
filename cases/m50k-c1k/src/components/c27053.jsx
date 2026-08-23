import React from 'react';
const LABEL_27053 = 'component_27053';
export function Component27053({ value = 27053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27053, 'data-value': derived.doubled }, children);
}
export default Component27053;
