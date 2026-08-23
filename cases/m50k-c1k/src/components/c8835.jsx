import React from 'react';
const LABEL_8835 = 'component_8835';
export function Component8835({ value = 8835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8835, 'data-value': derived.doubled }, children);
}
export default Component8835;
