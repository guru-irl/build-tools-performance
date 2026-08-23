import React from 'react';
const LABEL_36332 = 'component_36332';
export function Component36332({ value = 36332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36332, 'data-value': derived.doubled }, children);
}
export default Component36332;
