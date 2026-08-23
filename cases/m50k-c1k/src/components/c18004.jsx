import React from 'react';
const LABEL_18004 = 'component_18004';
export function Component18004({ value = 18004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18004, 'data-value': derived.doubled }, children);
}
export default Component18004;
