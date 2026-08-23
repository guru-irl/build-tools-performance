import React from 'react';
const LABEL_23188 = 'component_23188';
export function Component23188({ value = 23188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23188, 'data-value': derived.doubled }, children);
}
export default Component23188;
