import React from 'react';
const LABEL_24650 = 'component_24650';
export function Component24650({ value = 24650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24650, 'data-value': derived.doubled }, children);
}
export default Component24650;
