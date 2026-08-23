import React from 'react';
const LABEL_35469 = 'component_35469';
export function Component35469({ value = 35469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35469, 'data-value': derived.doubled }, children);
}
export default Component35469;
