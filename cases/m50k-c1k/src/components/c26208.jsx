import React from 'react';
const LABEL_26208 = 'component_26208';
export function Component26208({ value = 26208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26208, 'data-value': derived.doubled }, children);
}
export default Component26208;
