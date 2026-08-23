import React from 'react';
const LABEL_37296 = 'component_37296';
export function Component37296({ value = 37296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37296, 'data-value': derived.doubled }, children);
}
export default Component37296;
