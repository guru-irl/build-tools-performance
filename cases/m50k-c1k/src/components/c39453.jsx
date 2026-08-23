import React from 'react';
const LABEL_39453 = 'component_39453';
export function Component39453({ value = 39453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39453, 'data-value': derived.doubled }, children);
}
export default Component39453;
