import React from 'react';
const LABEL_44358 = 'component_44358';
export function Component44358({ value = 44358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44358, 'data-value': derived.doubled }, children);
}
export default Component44358;
