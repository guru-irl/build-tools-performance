import React from 'react';
const LABEL_3358 = 'component_3358';
export function Component3358({ value = 3358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3358, 'data-value': derived.doubled }, children);
}
export default Component3358;
