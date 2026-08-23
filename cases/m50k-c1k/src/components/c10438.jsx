import React from 'react';
const LABEL_10438 = 'component_10438';
export function Component10438({ value = 10438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10438, 'data-value': derived.doubled }, children);
}
export default Component10438;
