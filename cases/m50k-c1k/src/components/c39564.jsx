import React from 'react';
const LABEL_39564 = 'component_39564';
export function Component39564({ value = 39564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39564, 'data-value': derived.doubled }, children);
}
export default Component39564;
