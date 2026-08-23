import React from 'react';
const LABEL_38582 = 'component_38582';
export function Component38582({ value = 38582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38582, 'data-value': derived.doubled }, children);
}
export default Component38582;
