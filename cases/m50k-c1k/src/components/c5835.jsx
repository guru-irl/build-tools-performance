import React from 'react';
const LABEL_5835 = 'component_5835';
export function Component5835({ value = 5835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5835, 'data-value': derived.doubled }, children);
}
export default Component5835;
