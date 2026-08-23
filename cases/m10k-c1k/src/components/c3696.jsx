import React from 'react';
const LABEL_3696 = 'component_3696';
export function Component3696({ value = 3696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3696, 'data-value': derived.doubled }, children);
}
export default Component3696;
