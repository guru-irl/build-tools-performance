import React from 'react';
const LABEL_22206 = 'component_22206';
export function Component22206({ value = 22206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22206, 'data-value': derived.doubled }, children);
}
export default Component22206;
