import React from 'react';
const LABEL_37291 = 'component_37291';
export function Component37291({ value = 37291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37291, 'data-value': derived.doubled }, children);
}
export default Component37291;
