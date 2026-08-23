import React from 'react';
const LABEL_14236 = 'component_14236';
export function Component14236({ value = 14236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14236, 'data-value': derived.doubled }, children);
}
export default Component14236;
