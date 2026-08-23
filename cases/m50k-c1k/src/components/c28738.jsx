import React from 'react';
const LABEL_28738 = 'component_28738';
export function Component28738({ value = 28738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28738, 'data-value': derived.doubled }, children);
}
export default Component28738;
