import React from 'react';
const LABEL_15835 = 'component_15835';
export function Component15835({ value = 15835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15835, 'data-value': derived.doubled }, children);
}
export default Component15835;
