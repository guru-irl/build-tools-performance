import React from 'react';
const LABEL_3287 = 'component_3287';
export function Component3287({ value = 3287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3287, 'data-value': derived.doubled }, children);
}
export default Component3287;
