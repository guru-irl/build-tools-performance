import React from 'react';
const LABEL_20478 = 'component_20478';
export function Component20478({ value = 20478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20478, 'data-value': derived.doubled }, children);
}
export default Component20478;
