import React from 'react';
const LABEL_34327 = 'component_34327';
export function Component34327({ value = 34327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34327, 'data-value': derived.doubled }, children);
}
export default Component34327;
