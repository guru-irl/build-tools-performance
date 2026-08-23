import React from 'react';
const LABEL_33835 = 'component_33835';
export function Component33835({ value = 33835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33835, 'data-value': derived.doubled }, children);
}
export default Component33835;
