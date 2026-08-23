import React from 'react';
const LABEL_22003 = 'component_22003';
export function Component22003({ value = 22003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22003, 'data-value': derived.doubled }, children);
}
export default Component22003;
