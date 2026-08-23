import React from 'react';
const LABEL_39287 = 'component_39287';
export function Component39287({ value = 39287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39287, 'data-value': derived.doubled }, children);
}
export default Component39287;
