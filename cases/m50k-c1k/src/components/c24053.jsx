import React from 'react';
const LABEL_24053 = 'component_24053';
export function Component24053({ value = 24053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24053, 'data-value': derived.doubled }, children);
}
export default Component24053;
