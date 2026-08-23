import React from 'react';
const LABEL_13551 = 'component_13551';
export function Component13551({ value = 13551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13551, 'data-value': derived.doubled }, children);
}
export default Component13551;
