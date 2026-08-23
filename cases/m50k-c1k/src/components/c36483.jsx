import React from 'react';
const LABEL_36483 = 'component_36483';
export function Component36483({ value = 36483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36483, 'data-value': derived.doubled }, children);
}
export default Component36483;
