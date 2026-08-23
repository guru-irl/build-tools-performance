import React from 'react';
const LABEL_3011 = 'component_3011';
export function Component3011({ value = 3011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3011, 'data-value': derived.doubled }, children);
}
export default Component3011;
