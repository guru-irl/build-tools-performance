import React from 'react';
const LABEL_3500 = 'component_3500';
export function Component3500({ value = 3500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3500, 'data-value': derived.doubled }, children);
}
export default Component3500;
