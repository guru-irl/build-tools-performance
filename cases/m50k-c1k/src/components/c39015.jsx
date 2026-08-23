import React from 'react';
const LABEL_39015 = 'component_39015';
export function Component39015({ value = 39015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39015, 'data-value': derived.doubled }, children);
}
export default Component39015;
