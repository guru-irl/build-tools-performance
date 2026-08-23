import React from 'react';
const LABEL_44726 = 'component_44726';
export function Component44726({ value = 44726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44726, 'data-value': derived.doubled }, children);
}
export default Component44726;
