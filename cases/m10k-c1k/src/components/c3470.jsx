import React from 'react';
const LABEL_3470 = 'component_3470';
export function Component3470({ value = 3470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3470, 'data-value': derived.doubled }, children);
}
export default Component3470;
