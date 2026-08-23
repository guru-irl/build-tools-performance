import React from 'react';
const LABEL_33168 = 'component_33168';
export function Component33168({ value = 33168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33168, 'data-value': derived.doubled }, children);
}
export default Component33168;
