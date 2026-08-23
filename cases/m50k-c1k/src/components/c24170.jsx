import React from 'react';
const LABEL_24170 = 'component_24170';
export function Component24170({ value = 24170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24170, 'data-value': derived.doubled }, children);
}
export default Component24170;
