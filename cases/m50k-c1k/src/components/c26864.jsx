import React from 'react';
const LABEL_26864 = 'component_26864';
export function Component26864({ value = 26864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26864, 'data-value': derived.doubled }, children);
}
export default Component26864;
