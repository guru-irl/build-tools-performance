import React from 'react';
const LABEL_17485 = 'component_17485';
export function Component17485({ value = 17485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17485, 'data-value': derived.doubled }, children);
}
export default Component17485;
