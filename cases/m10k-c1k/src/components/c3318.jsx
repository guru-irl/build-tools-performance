import React from 'react';
const LABEL_3318 = 'component_3318';
export function Component3318({ value = 3318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3318, 'data-value': derived.doubled }, children);
}
export default Component3318;
