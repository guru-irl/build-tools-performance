import React from 'react';
const LABEL_13485 = 'component_13485';
export function Component13485({ value = 13485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13485, 'data-value': derived.doubled }, children);
}
export default Component13485;
