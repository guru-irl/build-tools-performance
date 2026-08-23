import React from 'react';
const LABEL_8738 = 'component_8738';
export function Component8738({ value = 8738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8738, 'data-value': derived.doubled }, children);
}
export default Component8738;
