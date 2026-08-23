import React from 'react';
const LABEL_23295 = 'component_23295';
export function Component23295({ value = 23295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23295, 'data-value': derived.doubled }, children);
}
export default Component23295;
