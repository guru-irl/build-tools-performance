import React from 'react';
const LABEL_23358 = 'component_23358';
export function Component23358({ value = 23358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23358, 'data-value': derived.doubled }, children);
}
export default Component23358;
