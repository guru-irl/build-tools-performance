import React from 'react';
const LABEL_26369 = 'component_26369';
export function Component26369({ value = 26369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26369, 'data-value': derived.doubled }, children);
}
export default Component26369;
