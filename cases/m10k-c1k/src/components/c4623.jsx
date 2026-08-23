import React from 'react';
const LABEL_4623 = 'component_4623';
export function Component4623({ value = 4623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4623, 'data-value': derived.doubled }, children);
}
export default Component4623;
