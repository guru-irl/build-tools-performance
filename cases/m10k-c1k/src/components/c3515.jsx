import React from 'react';
const LABEL_3515 = 'component_3515';
export function Component3515({ value = 3515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3515, 'data-value': derived.doubled }, children);
}
export default Component3515;
