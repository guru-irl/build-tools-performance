import React from 'react';
const LABEL_20332 = 'component_20332';
export function Component20332({ value = 20332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20332, 'data-value': derived.doubled }, children);
}
export default Component20332;
