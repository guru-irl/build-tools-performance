import React from 'react';
const LABEL_3668 = 'component_3668';
export function Component3668({ value = 3668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3668, 'data-value': derived.doubled }, children);
}
export default Component3668;
