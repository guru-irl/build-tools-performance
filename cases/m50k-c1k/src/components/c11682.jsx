import React from 'react';
const LABEL_11682 = 'component_11682';
export function Component11682({ value = 11682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11682, 'data-value': derived.doubled }, children);
}
export default Component11682;
