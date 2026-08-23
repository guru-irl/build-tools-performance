import React from 'react';
const LABEL_18117 = 'component_18117';
export function Component18117({ value = 18117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18117, 'data-value': derived.doubled }, children);
}
export default Component18117;
