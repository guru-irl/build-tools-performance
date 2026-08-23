import React from 'react';
const LABEL_33265 = 'component_33265';
export function Component33265({ value = 33265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33265, 'data-value': derived.doubled }, children);
}
export default Component33265;
