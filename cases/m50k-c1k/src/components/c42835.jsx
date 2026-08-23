import React from 'react';
const LABEL_42835 = 'component_42835';
export function Component42835({ value = 42835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42835, 'data-value': derived.doubled }, children);
}
export default Component42835;
