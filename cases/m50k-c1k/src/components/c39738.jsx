import React from 'react';
const LABEL_39738 = 'component_39738';
export function Component39738({ value = 39738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39738, 'data-value': derived.doubled }, children);
}
export default Component39738;
