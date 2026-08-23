import React from 'react';
const LABEL_3997 = 'component_3997';
export function Component3997({ value = 3997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3997, 'data-value': derived.doubled }, children);
}
export default Component3997;
