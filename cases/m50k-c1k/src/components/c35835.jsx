import React from 'react';
const LABEL_35835 = 'component_35835';
export function Component35835({ value = 35835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35835, 'data-value': derived.doubled }, children);
}
export default Component35835;
