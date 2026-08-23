import React from 'react';
const LABEL_30823 = 'component_30823';
export function Component30823({ value = 30823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30823, 'data-value': derived.doubled }, children);
}
export default Component30823;
