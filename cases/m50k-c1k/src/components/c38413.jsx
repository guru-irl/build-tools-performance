import React from 'react';
const LABEL_38413 = 'component_38413';
export function Component38413({ value = 38413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38413, 'data-value': derived.doubled }, children);
}
export default Component38413;
