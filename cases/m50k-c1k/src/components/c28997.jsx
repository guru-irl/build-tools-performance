import React from 'react';
const LABEL_28997 = 'component_28997';
export function Component28997({ value = 28997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28997, 'data-value': derived.doubled }, children);
}
export default Component28997;
