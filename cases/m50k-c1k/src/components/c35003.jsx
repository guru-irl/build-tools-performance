import React from 'react';
const LABEL_35003 = 'component_35003';
export function Component35003({ value = 35003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35003, 'data-value': derived.doubled }, children);
}
export default Component35003;
