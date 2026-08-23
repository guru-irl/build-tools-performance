import React from 'react';
const LABEL_20159 = 'component_20159';
export function Component20159({ value = 20159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20159, 'data-value': derived.doubled }, children);
}
export default Component20159;
