import React from 'react';
const LABEL_3469 = 'component_3469';
export function Component3469({ value = 3469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3469, 'data-value': derived.doubled }, children);
}
export default Component3469;
