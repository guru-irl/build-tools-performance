import React from 'react';
const LABEL_17537 = 'component_17537';
export function Component17537({ value = 17537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17537, 'data-value': derived.doubled }, children);
}
export default Component17537;
