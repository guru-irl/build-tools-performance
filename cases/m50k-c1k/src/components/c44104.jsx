import React from 'react';
const LABEL_44104 = 'component_44104';
export function Component44104({ value = 44104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44104, 'data-value': derived.doubled }, children);
}
export default Component44104;
