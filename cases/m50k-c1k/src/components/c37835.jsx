import React from 'react';
const LABEL_37835 = 'component_37835';
export function Component37835({ value = 37835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37835, 'data-value': derived.doubled }, children);
}
export default Component37835;
