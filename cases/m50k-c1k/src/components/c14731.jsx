import React from 'react';
const LABEL_14731 = 'component_14731';
export function Component14731({ value = 14731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14731, 'data-value': derived.doubled }, children);
}
export default Component14731;
