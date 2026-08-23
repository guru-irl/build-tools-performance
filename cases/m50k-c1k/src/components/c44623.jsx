import React from 'react';
const LABEL_44623 = 'component_44623';
export function Component44623({ value = 44623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44623, 'data-value': derived.doubled }, children);
}
export default Component44623;
