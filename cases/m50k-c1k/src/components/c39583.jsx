import React from 'react';
const LABEL_39583 = 'component_39583';
export function Component39583({ value = 39583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39583, 'data-value': derived.doubled }, children);
}
export default Component39583;
