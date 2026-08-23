import React from 'react';
const LABEL_23299 = 'component_23299';
export function Component23299({ value = 23299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23299, 'data-value': derived.doubled }, children);
}
export default Component23299;
