import React from 'react';
const LABEL_3956 = 'component_3956';
export function Component3956({ value = 3956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3956, 'data-value': derived.doubled }, children);
}
export default Component3956;
