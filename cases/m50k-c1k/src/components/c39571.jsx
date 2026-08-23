import React from 'react';
const LABEL_39571 = 'component_39571';
export function Component39571({ value = 39571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39571, 'data-value': derived.doubled }, children);
}
export default Component39571;
