import React from 'react';
const LABEL_43321 = 'component_43321';
export function Component43321({ value = 43321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43321, 'data-value': derived.doubled }, children);
}
export default Component43321;
