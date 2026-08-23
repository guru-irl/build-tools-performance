import React from 'react';
const LABEL_45014 = 'component_45014';
export function Component45014({ value = 45014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45014, 'data-value': derived.doubled }, children);
}
export default Component45014;
