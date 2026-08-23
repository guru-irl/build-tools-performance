import React from 'react';
const LABEL_39055 = 'component_39055';
export function Component39055({ value = 39055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39055, 'data-value': derived.doubled }, children);
}
export default Component39055;
