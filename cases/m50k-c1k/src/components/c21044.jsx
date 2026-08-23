import React from 'react';
const LABEL_21044 = 'component_21044';
export function Component21044({ value = 21044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21044, 'data-value': derived.doubled }, children);
}
export default Component21044;
