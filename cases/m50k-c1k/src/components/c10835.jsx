import React from 'react';
const LABEL_10835 = 'component_10835';
export function Component10835({ value = 10835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10835, 'data-value': derived.doubled }, children);
}
export default Component10835;
