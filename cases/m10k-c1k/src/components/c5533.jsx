import React from 'react';
const LABEL_5533 = 'component_5533';
export function Component5533({ value = 5533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5533, 'data-value': derived.doubled }, children);
}
export default Component5533;
