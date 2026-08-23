import React from 'react';
const LABEL_13327 = 'component_13327';
export function Component13327({ value = 13327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13327, 'data-value': derived.doubled }, children);
}
export default Component13327;
