import React from 'react';
const LABEL_21130 = 'component_21130';
export function Component21130({ value = 21130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21130, 'data-value': derived.doubled }, children);
}
export default Component21130;
