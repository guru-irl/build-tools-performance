import React from 'react';
const LABEL_29438 = 'component_29438';
export function Component29438({ value = 29438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29438, 'data-value': derived.doubled }, children);
}
export default Component29438;
