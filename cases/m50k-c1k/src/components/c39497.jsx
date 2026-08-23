import React from 'react';
const LABEL_39497 = 'component_39497';
export function Component39497({ value = 39497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39497, 'data-value': derived.doubled }, children);
}
export default Component39497;
