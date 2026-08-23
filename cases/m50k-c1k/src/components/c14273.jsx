import React from 'react';
const LABEL_14273 = 'component_14273';
export function Component14273({ value = 14273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14273, 'data-value': derived.doubled }, children);
}
export default Component14273;
