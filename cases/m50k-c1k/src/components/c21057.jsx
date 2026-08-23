import React from 'react';
const LABEL_21057 = 'component_21057';
export function Component21057({ value = 21057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21057, 'data-value': derived.doubled }, children);
}
export default Component21057;
