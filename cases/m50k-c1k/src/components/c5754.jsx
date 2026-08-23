import React from 'react';
const LABEL_5754 = 'component_5754';
export function Component5754({ value = 5754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5754, 'data-value': derived.doubled }, children);
}
export default Component5754;
