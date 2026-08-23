import React from 'react';
const LABEL_10633 = 'component_10633';
export function Component10633({ value = 10633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10633, 'data-value': derived.doubled }, children);
}
export default Component10633;
