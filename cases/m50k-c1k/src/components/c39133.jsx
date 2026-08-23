import React from 'react';
const LABEL_39133 = 'component_39133';
export function Component39133({ value = 39133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39133, 'data-value': derived.doubled }, children);
}
export default Component39133;
