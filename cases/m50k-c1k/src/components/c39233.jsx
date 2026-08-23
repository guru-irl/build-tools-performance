import React from 'react';
const LABEL_39233 = 'component_39233';
export function Component39233({ value = 39233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39233, 'data-value': derived.doubled }, children);
}
export default Component39233;
