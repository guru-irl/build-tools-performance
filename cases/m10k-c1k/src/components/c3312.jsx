import React from 'react';
const LABEL_3312 = 'component_3312';
export function Component3312({ value = 3312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3312, 'data-value': derived.doubled }, children);
}
export default Component3312;
