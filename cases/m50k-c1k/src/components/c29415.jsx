import React from 'react';
const LABEL_29415 = 'component_29415';
export function Component29415({ value = 29415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29415, 'data-value': derived.doubled }, children);
}
export default Component29415;
