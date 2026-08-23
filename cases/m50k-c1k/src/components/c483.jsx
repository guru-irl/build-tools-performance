import React from 'react';
const LABEL_483 = 'component_483';
export function Component483({ value = 483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_483, 'data-value': derived.doubled }, children);
}
export default Component483;
