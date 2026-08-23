import React from 'react';
const LABEL_37639 = 'component_37639';
export function Component37639({ value = 37639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37639, 'data-value': derived.doubled }, children);
}
export default Component37639;
