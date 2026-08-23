import React from 'react';
const LABEL_3813 = 'component_3813';
export function Component3813({ value = 3813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3813, 'data-value': derived.doubled }, children);
}
export default Component3813;
