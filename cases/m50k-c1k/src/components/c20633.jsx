import React from 'react';
const LABEL_20633 = 'component_20633';
export function Component20633({ value = 20633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20633, 'data-value': derived.doubled }, children);
}
export default Component20633;
