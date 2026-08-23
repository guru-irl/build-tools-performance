import React from 'react';
const LABEL_3975 = 'component_3975';
export function Component3975({ value = 3975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3975, 'data-value': derived.doubled }, children);
}
export default Component3975;
