import React from 'react';
const LABEL_45864 = 'component_45864';
export function Component45864({ value = 45864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45864, 'data-value': derived.doubled }, children);
}
export default Component45864;
