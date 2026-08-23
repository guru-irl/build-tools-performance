import React from 'react';
const LABEL_39659 = 'component_39659';
export function Component39659({ value = 39659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39659, 'data-value': derived.doubled }, children);
}
export default Component39659;
