import React from 'react';
const LABEL_12438 = 'component_12438';
export function Component12438({ value = 12438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12438, 'data-value': derived.doubled }, children);
}
export default Component12438;
