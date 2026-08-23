import React from 'react';
const LABEL_3627 = 'component_3627';
export function Component3627({ value = 3627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3627, 'data-value': derived.doubled }, children);
}
export default Component3627;
