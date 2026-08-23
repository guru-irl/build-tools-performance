import React from 'react';
const LABEL_36413 = 'component_36413';
export function Component36413({ value = 36413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36413, 'data-value': derived.doubled }, children);
}
export default Component36413;
