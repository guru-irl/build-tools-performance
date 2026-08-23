import React from 'react';
const LABEL_3882 = 'component_3882';
export function Component3882({ value = 3882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3882, 'data-value': derived.doubled }, children);
}
export default Component3882;
