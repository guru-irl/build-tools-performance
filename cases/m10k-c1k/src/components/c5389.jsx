import React from 'react';
const LABEL_5389 = 'component_5389';
export function Component5389({ value = 5389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5389, 'data-value': derived.doubled }, children);
}
export default Component5389;
