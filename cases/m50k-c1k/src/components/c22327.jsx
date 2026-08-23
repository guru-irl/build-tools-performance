import React from 'react';
const LABEL_22327 = 'component_22327';
export function Component22327({ value = 22327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22327, 'data-value': derived.doubled }, children);
}
export default Component22327;
