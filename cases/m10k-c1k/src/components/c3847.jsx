import React from 'react';
const LABEL_3847 = 'component_3847';
export function Component3847({ value = 3847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3847, 'data-value': derived.doubled }, children);
}
export default Component3847;
