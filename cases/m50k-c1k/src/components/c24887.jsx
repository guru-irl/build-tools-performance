import React from 'react';
const LABEL_24887 = 'component_24887';
export function Component24887({ value = 24887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24887, 'data-value': derived.doubled }, children);
}
export default Component24887;
