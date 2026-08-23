import React from 'react';
const LABEL_24250 = 'component_24250';
export function Component24250({ value = 24250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24250, 'data-value': derived.doubled }, children);
}
export default Component24250;
