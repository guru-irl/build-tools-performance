import React from 'react';
const LABEL_5510 = 'component_5510';
export function Component5510({ value = 5510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5510, 'data-value': derived.doubled }, children);
}
export default Component5510;
