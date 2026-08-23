import React from 'react';
const LABEL_3544 = 'component_3544';
export function Component3544({ value = 3544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3544, 'data-value': derived.doubled }, children);
}
export default Component3544;
