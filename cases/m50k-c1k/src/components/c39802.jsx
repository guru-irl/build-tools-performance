import React from 'react';
const LABEL_39802 = 'component_39802';
export function Component39802({ value = 39802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39802, 'data-value': derived.doubled }, children);
}
export default Component39802;
