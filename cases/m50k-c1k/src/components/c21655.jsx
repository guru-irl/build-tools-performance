import React from 'react';
const LABEL_21655 = 'component_21655';
export function Component21655({ value = 21655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21655, 'data-value': derived.doubled }, children);
}
export default Component21655;
