import React from 'react';
const LABEL_10358 = 'component_10358';
export function Component10358({ value = 10358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10358, 'data-value': derived.doubled }, children);
}
export default Component10358;
