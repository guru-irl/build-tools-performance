import React from 'react';
const LABEL_3355 = 'component_3355';
export function Component3355({ value = 3355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3355, 'data-value': derived.doubled }, children);
}
export default Component3355;
