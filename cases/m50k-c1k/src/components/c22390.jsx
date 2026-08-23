import React from 'react';
const LABEL_22390 = 'component_22390';
export function Component22390({ value = 22390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22390, 'data-value': derived.doubled }, children);
}
export default Component22390;
