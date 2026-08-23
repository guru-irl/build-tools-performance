import React from 'react';
const LABEL_39849 = 'component_39849';
export function Component39849({ value = 39849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39849, 'data-value': derived.doubled }, children);
}
export default Component39849;
