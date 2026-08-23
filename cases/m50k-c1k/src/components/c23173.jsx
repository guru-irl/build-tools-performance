import React from 'react';
const LABEL_23173 = 'component_23173';
export function Component23173({ value = 23173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23173, 'data-value': derived.doubled }, children);
}
export default Component23173;
