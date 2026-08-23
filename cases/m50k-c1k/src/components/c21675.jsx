import React from 'react';
const LABEL_21675 = 'component_21675';
export function Component21675({ value = 21675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21675, 'data-value': derived.doubled }, children);
}
export default Component21675;
