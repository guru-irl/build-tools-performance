import React from 'react';
const LABEL_12430 = 'component_12430';
export function Component12430({ value = 12430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12430, 'data-value': derived.doubled }, children);
}
export default Component12430;
