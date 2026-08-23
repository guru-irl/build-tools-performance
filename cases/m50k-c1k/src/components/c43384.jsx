import React from 'react';
const LABEL_43384 = 'component_43384';
export function Component43384({ value = 43384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43384, 'data-value': derived.doubled }, children);
}
export default Component43384;
