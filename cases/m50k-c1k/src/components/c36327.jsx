import React from 'react';
const LABEL_36327 = 'component_36327';
export function Component36327({ value = 36327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36327, 'data-value': derived.doubled }, children);
}
export default Component36327;
