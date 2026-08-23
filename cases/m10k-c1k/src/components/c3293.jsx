import React from 'react';
const LABEL_3293 = 'component_3293';
export function Component3293({ value = 3293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3293, 'data-value': derived.doubled }, children);
}
export default Component3293;
