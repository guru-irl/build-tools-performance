import React from 'react';
const LABEL_835 = 'component_835';
export function Component835({ value = 835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_835, 'data-value': derived.doubled }, children);
}
export default Component835;
