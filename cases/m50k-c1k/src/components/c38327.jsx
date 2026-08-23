import React from 'react';
const LABEL_38327 = 'component_38327';
export function Component38327({ value = 38327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38327, 'data-value': derived.doubled }, children);
}
export default Component38327;
