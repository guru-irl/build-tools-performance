import React from 'react';
const LABEL_19957 = 'component_19957';
export function Component19957({ value = 19957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19957, 'data-value': derived.doubled }, children);
}
export default Component19957;
