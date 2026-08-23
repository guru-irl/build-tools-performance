import React from 'react';
const LABEL_24342 = 'component_24342';
export function Component24342({ value = 24342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24342, 'data-value': derived.doubled }, children);
}
export default Component24342;
