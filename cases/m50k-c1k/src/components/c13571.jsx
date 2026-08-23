import React from 'react';
const LABEL_13571 = 'component_13571';
export function Component13571({ value = 13571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13571, 'data-value': derived.doubled }, children);
}
export default Component13571;
