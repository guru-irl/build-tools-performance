import React from 'react';
const LABEL_20292 = 'component_20292';
export function Component20292({ value = 20292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20292, 'data-value': derived.doubled }, children);
}
export default Component20292;
