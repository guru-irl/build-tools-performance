import React from 'react';
const LABEL_20989 = 'component_20989';
export function Component20989({ value = 20989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20989, 'data-value': derived.doubled }, children);
}
export default Component20989;
