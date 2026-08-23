import React from 'react';
const LABEL_27367 = 'component_27367';
export function Component27367({ value = 27367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27367, 'data-value': derived.doubled }, children);
}
export default Component27367;
