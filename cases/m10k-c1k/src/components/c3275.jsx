import React from 'react';
const LABEL_3275 = 'component_3275';
export function Component3275({ value = 3275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3275, 'data-value': derived.doubled }, children);
}
export default Component3275;
