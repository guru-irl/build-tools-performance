import React from 'react';
const LABEL_37127 = 'component_37127';
export function Component37127({ value = 37127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37127, 'data-value': derived.doubled }, children);
}
export default Component37127;
