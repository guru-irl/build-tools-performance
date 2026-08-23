import React from 'react';
const LABEL_18753 = 'component_18753';
export function Component18753({ value = 18753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18753, 'data-value': derived.doubled }, children);
}
export default Component18753;
