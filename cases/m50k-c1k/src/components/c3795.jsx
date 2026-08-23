import React from 'react';
const LABEL_3795 = 'component_3795';
export function Component3795({ value = 3795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3795, 'data-value': derived.doubled }, children);
}
export default Component3795;
