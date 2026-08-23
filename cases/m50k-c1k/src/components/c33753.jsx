import React from 'react';
const LABEL_33753 = 'component_33753';
export function Component33753({ value = 33753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33753, 'data-value': derived.doubled }, children);
}
export default Component33753;
