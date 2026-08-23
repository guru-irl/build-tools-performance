import React from 'react';
const LABEL_32135 = 'component_32135';
export function Component32135({ value = 32135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32135, 'data-value': derived.doubled }, children);
}
export default Component32135;
