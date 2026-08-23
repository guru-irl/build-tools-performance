import React from 'react';
const LABEL_28639 = 'component_28639';
export function Component28639({ value = 28639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28639, 'data-value': derived.doubled }, children);
}
export default Component28639;
