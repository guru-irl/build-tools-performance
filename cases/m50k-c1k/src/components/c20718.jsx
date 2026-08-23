import React from 'react';
const LABEL_20718 = 'component_20718';
export function Component20718({ value = 20718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20718, 'data-value': derived.doubled }, children);
}
export default Component20718;
