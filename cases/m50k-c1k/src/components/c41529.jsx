import React from 'react';
const LABEL_41529 = 'component_41529';
export function Component41529({ value = 41529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41529, 'data-value': derived.doubled }, children);
}
export default Component41529;
