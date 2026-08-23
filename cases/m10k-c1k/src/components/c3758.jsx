import React from 'react';
const LABEL_3758 = 'component_3758';
export function Component3758({ value = 3758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3758, 'data-value': derived.doubled }, children);
}
export default Component3758;
