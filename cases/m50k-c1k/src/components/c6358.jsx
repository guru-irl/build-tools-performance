import React from 'react';
const LABEL_6358 = 'component_6358';
export function Component6358({ value = 6358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6358, 'data-value': derived.doubled }, children);
}
export default Component6358;
