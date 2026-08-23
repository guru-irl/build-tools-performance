import React from 'react';
const LABEL_26753 = 'component_26753';
export function Component26753({ value = 26753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26753, 'data-value': derived.doubled }, children);
}
export default Component26753;
