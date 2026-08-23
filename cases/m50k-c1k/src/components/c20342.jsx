import React from 'react';
const LABEL_20342 = 'component_20342';
export function Component20342({ value = 20342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20342, 'data-value': derived.doubled }, children);
}
export default Component20342;
