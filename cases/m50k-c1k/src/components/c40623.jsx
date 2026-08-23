import React from 'react';
const LABEL_40623 = 'component_40623';
export function Component40623({ value = 40623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40623, 'data-value': derived.doubled }, children);
}
export default Component40623;
