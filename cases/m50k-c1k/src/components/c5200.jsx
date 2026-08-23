import React from 'react';
const LABEL_5200 = 'component_5200';
export function Component5200({ value = 5200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5200, 'data-value': derived.doubled }, children);
}
export default Component5200;
