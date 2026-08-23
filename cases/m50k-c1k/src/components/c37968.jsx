import React from 'react';
const LABEL_37968 = 'component_37968';
export function Component37968({ value = 37968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37968, 'data-value': derived.doubled }, children);
}
export default Component37968;
