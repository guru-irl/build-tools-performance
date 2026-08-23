import React from 'react';
const LABEL_12835 = 'component_12835';
export function Component12835({ value = 12835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12835, 'data-value': derived.doubled }, children);
}
export default Component12835;
