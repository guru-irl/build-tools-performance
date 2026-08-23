import React from 'react';
const LABEL_8819 = 'component_8819';
export function Component8819({ value = 8819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8819, 'data-value': derived.doubled }, children);
}
export default Component8819;
