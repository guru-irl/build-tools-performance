import React from 'react';
const LABEL_25276 = 'component_25276';
export function Component25276({ value = 25276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25276, 'data-value': derived.doubled }, children);
}
export default Component25276;
