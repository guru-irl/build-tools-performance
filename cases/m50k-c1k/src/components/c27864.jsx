import React from 'react';
const LABEL_27864 = 'component_27864';
export function Component27864({ value = 27864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27864, 'data-value': derived.doubled }, children);
}
export default Component27864;
