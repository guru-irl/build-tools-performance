import React from 'react';
const LABEL_24764 = 'component_24764';
export function Component24764({ value = 24764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24764, 'data-value': derived.doubled }, children);
}
export default Component24764;
