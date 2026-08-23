import React from 'react';
const LABEL_31326 = 'component_31326';
export function Component31326({ value = 31326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31326, 'data-value': derived.doubled }, children);
}
export default Component31326;
