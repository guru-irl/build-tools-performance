import React from 'react';
const LABEL_13438 = 'component_13438';
export function Component13438({ value = 13438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13438, 'data-value': derived.doubled }, children);
}
export default Component13438;
