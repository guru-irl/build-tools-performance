import React from 'react';
const LABEL_16961 = 'component_16961';
export function Component16961({ value = 16961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16961, 'data-value': derived.doubled }, children);
}
export default Component16961;
