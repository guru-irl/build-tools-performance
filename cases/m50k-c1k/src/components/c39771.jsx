import React from 'react';
const LABEL_39771 = 'component_39771';
export function Component39771({ value = 39771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39771, 'data-value': derived.doubled }, children);
}
export default Component39771;
