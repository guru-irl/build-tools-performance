import React from 'react';
const LABEL_39487 = 'component_39487';
export function Component39487({ value = 39487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39487, 'data-value': derived.doubled }, children);
}
export default Component39487;
