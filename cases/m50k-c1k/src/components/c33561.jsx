import React from 'react';
const LABEL_33561 = 'component_33561';
export function Component33561({ value = 33561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33561, 'data-value': derived.doubled }, children);
}
export default Component33561;
