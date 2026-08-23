import React from 'react';
const LABEL_26768 = 'component_26768';
export function Component26768({ value = 26768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26768, 'data-value': derived.doubled }, children);
}
export default Component26768;
