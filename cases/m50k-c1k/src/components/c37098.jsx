import React from 'react';
const LABEL_37098 = 'component_37098';
export function Component37098({ value = 37098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37098, 'data-value': derived.doubled }, children);
}
export default Component37098;
