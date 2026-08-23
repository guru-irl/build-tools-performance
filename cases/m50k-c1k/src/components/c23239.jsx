import React from 'react';
const LABEL_23239 = 'component_23239';
export function Component23239({ value = 23239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23239, 'data-value': derived.doubled }, children);
}
export default Component23239;
