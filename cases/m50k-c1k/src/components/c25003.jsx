import React from 'react';
const LABEL_25003 = 'component_25003';
export function Component25003({ value = 25003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25003, 'data-value': derived.doubled }, children);
}
export default Component25003;
