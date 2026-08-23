import React from 'react';
const LABEL_37342 = 'component_37342';
export function Component37342({ value = 37342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37342, 'data-value': derived.doubled }, children);
}
export default Component37342;
