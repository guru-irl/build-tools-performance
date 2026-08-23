import React from 'react';
const LABEL_42731 = 'component_42731';
export function Component42731({ value = 42731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42731, 'data-value': derived.doubled }, children);
}
export default Component42731;
