import React from 'react';
const LABEL_5428 = 'component_5428';
export function Component5428({ value = 5428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5428, 'data-value': derived.doubled }, children);
}
export default Component5428;
