import React from 'react';
const LABEL_3818 = 'component_3818';
export function Component3818({ value = 3818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3818, 'data-value': derived.doubled }, children);
}
export default Component3818;
