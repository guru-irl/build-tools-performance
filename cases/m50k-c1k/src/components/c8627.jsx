import React from 'react';
const LABEL_8627 = 'component_8627';
export function Component8627({ value = 8627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8627, 'data-value': derived.doubled }, children);
}
export default Component8627;
