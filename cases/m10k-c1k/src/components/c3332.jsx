import React from 'react';
const LABEL_3332 = 'component_3332';
export function Component3332({ value = 3332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3332, 'data-value': derived.doubled }, children);
}
export default Component3332;
