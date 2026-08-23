import React from 'react';
const LABEL_250 = 'component_250';
export function Component250({ value = 250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_250, 'data-value': derived.doubled }, children);
}
export default Component250;
