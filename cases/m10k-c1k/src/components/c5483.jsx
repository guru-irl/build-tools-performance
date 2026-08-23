import React from 'react';
const LABEL_5483 = 'component_5483';
export function Component5483({ value = 5483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5483, 'data-value': derived.doubled }, children);
}
export default Component5483;
