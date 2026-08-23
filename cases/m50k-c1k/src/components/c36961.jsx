import React from 'react';
const LABEL_36961 = 'component_36961';
export function Component36961({ value = 36961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36961, 'data-value': derived.doubled }, children);
}
export default Component36961;
