import React from 'react';
const LABEL_32485 = 'component_32485';
export function Component32485({ value = 32485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32485, 'data-value': derived.doubled }, children);
}
export default Component32485;
