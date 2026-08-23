import React from 'react';
const LABEL_14891 = 'component_14891';
export function Component14891({ value = 14891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14891, 'data-value': derived.doubled }, children);
}
export default Component14891;
