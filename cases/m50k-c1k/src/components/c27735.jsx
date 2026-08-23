import React from 'react';
const LABEL_27735 = 'component_27735';
export function Component27735({ value = 27735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27735, 'data-value': derived.doubled }, children);
}
export default Component27735;
