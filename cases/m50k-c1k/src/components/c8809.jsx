import React from 'react';
const LABEL_8809 = 'component_8809';
export function Component8809({ value = 8809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8809, 'data-value': derived.doubled }, children);
}
export default Component8809;
