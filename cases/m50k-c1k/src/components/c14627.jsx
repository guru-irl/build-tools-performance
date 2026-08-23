import React from 'react';
const LABEL_14627 = 'component_14627';
export function Component14627({ value = 14627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14627, 'data-value': derived.doubled }, children);
}
export default Component14627;
