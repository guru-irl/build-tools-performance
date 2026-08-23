import React from 'react';
const LABEL_39682 = 'component_39682';
export function Component39682({ value = 39682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39682, 'data-value': derived.doubled }, children);
}
export default Component39682;
