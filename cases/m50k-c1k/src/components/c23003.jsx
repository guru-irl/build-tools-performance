import React from 'react';
const LABEL_23003 = 'component_23003';
export function Component23003({ value = 23003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23003, 'data-value': derived.doubled }, children);
}
export default Component23003;
