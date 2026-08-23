import React from 'react';
const LABEL_3837 = 'component_3837';
export function Component3837({ value = 3837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3837, 'data-value': derived.doubled }, children);
}
export default Component3837;
