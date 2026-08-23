import React from 'react';
const LABEL_31627 = 'component_31627';
export function Component31627({ value = 31627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31627, 'data-value': derived.doubled }, children);
}
export default Component31627;
