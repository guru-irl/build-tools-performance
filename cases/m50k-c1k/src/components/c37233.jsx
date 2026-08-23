import React from 'react';
const LABEL_37233 = 'component_37233';
export function Component37233({ value = 37233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37233, 'data-value': derived.doubled }, children);
}
export default Component37233;
