import React from 'react';
const LABEL_3190 = 'component_3190';
export function Component3190({ value = 3190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3190, 'data-value': derived.doubled }, children);
}
export default Component3190;
