import React from 'react';
const LABEL_28753 = 'component_28753';
export function Component28753({ value = 28753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28753, 'data-value': derived.doubled }, children);
}
export default Component28753;
