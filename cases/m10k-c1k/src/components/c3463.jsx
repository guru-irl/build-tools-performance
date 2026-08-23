import React from 'react';
const LABEL_3463 = 'component_3463';
export function Component3463({ value = 3463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3463, 'data-value': derived.doubled }, children);
}
export default Component3463;
