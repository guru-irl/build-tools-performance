import React from 'react';
const LABEL_25902 = 'component_25902';
export function Component25902({ value = 25902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25902, 'data-value': derived.doubled }, children);
}
export default Component25902;
