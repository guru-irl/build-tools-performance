import React from 'react';
const LABEL_37003 = 'component_37003';
export function Component37003({ value = 37003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37003, 'data-value': derived.doubled }, children);
}
export default Component37003;
