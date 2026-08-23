import React from 'react';
const LABEL_3868 = 'component_3868';
export function Component3868({ value = 3868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3868, 'data-value': derived.doubled }, children);
}
export default Component3868;
