import React from 'react';
const LABEL_43590 = 'component_43590';
export function Component43590({ value = 43590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43590, 'data-value': derived.doubled }, children);
}
export default Component43590;
