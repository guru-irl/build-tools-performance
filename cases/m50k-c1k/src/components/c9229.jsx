import React from 'react';
const LABEL_9229 = 'component_9229';
export function Component9229({ value = 9229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9229, 'data-value': derived.doubled }, children);
}
export default Component9229;
