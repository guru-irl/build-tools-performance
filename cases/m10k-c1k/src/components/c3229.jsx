import React from 'react';
const LABEL_3229 = 'component_3229';
export function Component3229({ value = 3229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3229, 'data-value': derived.doubled }, children);
}
export default Component3229;
