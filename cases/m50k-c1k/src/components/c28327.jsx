import React from 'react';
const LABEL_28327 = 'component_28327';
export function Component28327({ value = 28327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28327, 'data-value': derived.doubled }, children);
}
export default Component28327;
