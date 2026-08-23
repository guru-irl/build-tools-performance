import React from 'react';
const LABEL_10385 = 'component_10385';
export function Component10385({ value = 10385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10385, 'data-value': derived.doubled }, children);
}
export default Component10385;
