import React from 'react';
const LABEL_16438 = 'component_16438';
export function Component16438({ value = 16438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16438, 'data-value': derived.doubled }, children);
}
export default Component16438;
