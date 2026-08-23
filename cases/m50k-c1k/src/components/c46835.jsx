import React from 'react';
const LABEL_46835 = 'component_46835';
export function Component46835({ value = 46835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46835, 'data-value': derived.doubled }, children);
}
export default Component46835;
