import React from 'react';
const LABEL_3245 = 'component_3245';
export function Component3245({ value = 3245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3245, 'data-value': derived.doubled }, children);
}
export default Component3245;
