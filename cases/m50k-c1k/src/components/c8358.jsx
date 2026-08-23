import React from 'react';
const LABEL_8358 = 'component_8358';
export function Component8358({ value = 8358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8358, 'data-value': derived.doubled }, children);
}
export default Component8358;
