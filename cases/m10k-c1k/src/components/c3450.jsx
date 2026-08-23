import React from 'react';
const LABEL_3450 = 'component_3450';
export function Component3450({ value = 3450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3450, 'data-value': derived.doubled }, children);
}
export default Component3450;
