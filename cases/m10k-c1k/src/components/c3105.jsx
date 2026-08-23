import React from 'react';
const LABEL_3105 = 'component_3105';
export function Component3105({ value = 3105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3105, 'data-value': derived.doubled }, children);
}
export default Component3105;
