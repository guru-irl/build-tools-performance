import React from 'react';
const LABEL_26485 = 'component_26485';
export function Component26485({ value = 26485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26485, 'data-value': derived.doubled }, children);
}
export default Component26485;
