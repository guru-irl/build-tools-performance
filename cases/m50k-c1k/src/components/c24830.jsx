import React from 'react';
const LABEL_24830 = 'component_24830';
export function Component24830({ value = 24830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24830, 'data-value': derived.doubled }, children);
}
export default Component24830;
