import React from 'react';
const LABEL_14997 = 'component_14997';
export function Component14997({ value = 14997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14997, 'data-value': derived.doubled }, children);
}
export default Component14997;
