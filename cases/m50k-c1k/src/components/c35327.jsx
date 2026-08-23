import React from 'react';
const LABEL_35327 = 'component_35327';
export function Component35327({ value = 35327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35327, 'data-value': derived.doubled }, children);
}
export default Component35327;
