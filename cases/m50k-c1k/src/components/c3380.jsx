import React from 'react';
const LABEL_3380 = 'component_3380';
export function Component3380({ value = 3380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3380, 'data-value': derived.doubled }, children);
}
export default Component3380;
