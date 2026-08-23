import React from 'react';
const LABEL_24298 = 'component_24298';
export function Component24298({ value = 24298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24298, 'data-value': derived.doubled }, children);
}
export default Component24298;
