import React from 'react';
const LABEL_1246 = 'component_1246';
export function Component1246({ value = 1246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1246, 'data-value': derived.doubled }, children);
}
export default Component1246;
