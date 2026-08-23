import React from 'react';
const LABEL_8639 = 'component_8639';
export function Component8639({ value = 8639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8639, 'data-value': derived.doubled }, children);
}
export default Component8639;
