import React from 'react';
const LABEL_14332 = 'component_14332';
export function Component14332({ value = 14332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14332, 'data-value': derived.doubled }, children);
}
export default Component14332;
