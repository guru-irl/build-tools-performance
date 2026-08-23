import React from 'react';
const LABEL_40358 = 'component_40358';
export function Component40358({ value = 40358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40358, 'data-value': derived.doubled }, children);
}
export default Component40358;
