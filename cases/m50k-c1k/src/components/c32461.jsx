import React from 'react';
const LABEL_32461 = 'component_32461';
export function Component32461({ value = 32461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32461, 'data-value': derived.doubled }, children);
}
export default Component32461;
