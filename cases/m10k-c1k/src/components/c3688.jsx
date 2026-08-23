import React from 'react';
const LABEL_3688 = 'component_3688';
export function Component3688({ value = 3688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3688, 'data-value': derived.doubled }, children);
}
export default Component3688;
