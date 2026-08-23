import React from 'react';
const LABEL_28494 = 'component_28494';
export function Component28494({ value = 28494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28494, 'data-value': derived.doubled }, children);
}
export default Component28494;
