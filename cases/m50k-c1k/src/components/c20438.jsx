import React from 'react';
const LABEL_20438 = 'component_20438';
export function Component20438({ value = 20438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20438, 'data-value': derived.doubled }, children);
}
export default Component20438;
