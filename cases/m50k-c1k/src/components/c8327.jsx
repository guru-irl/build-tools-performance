import React from 'react';
const LABEL_8327 = 'component_8327';
export function Component8327({ value = 8327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8327, 'data-value': derived.doubled }, children);
}
export default Component8327;
