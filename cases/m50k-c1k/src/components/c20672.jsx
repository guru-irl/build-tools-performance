import React from 'react';
const LABEL_20672 = 'component_20672';
export function Component20672({ value = 20672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20672, 'data-value': derived.doubled }, children);
}
export default Component20672;
