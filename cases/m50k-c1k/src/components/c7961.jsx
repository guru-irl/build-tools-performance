import React from 'react';
const LABEL_7961 = 'component_7961';
export function Component7961({ value = 7961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7961, 'data-value': derived.doubled }, children);
}
export default Component7961;
