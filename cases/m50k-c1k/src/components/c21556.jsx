import React from 'react';
const LABEL_21556 = 'component_21556';
export function Component21556({ value = 21556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21556, 'data-value': derived.doubled }, children);
}
export default Component21556;
