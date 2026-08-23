import React from 'react';
const LABEL_11512 = 'component_11512';
export function Component11512({ value = 11512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11512, 'data-value': derived.doubled }, children);
}
export default Component11512;
