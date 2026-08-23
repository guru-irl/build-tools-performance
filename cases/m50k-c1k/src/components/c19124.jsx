import React from 'react';
const LABEL_19124 = 'component_19124';
export function Component19124({ value = 19124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19124, 'data-value': derived.doubled }, children);
}
export default Component19124;
