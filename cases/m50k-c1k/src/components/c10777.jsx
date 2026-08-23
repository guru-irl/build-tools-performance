import React from 'react';
const LABEL_10777 = 'component_10777';
export function Component10777({ value = 10777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10777, 'data-value': derived.doubled }, children);
}
export default Component10777;
