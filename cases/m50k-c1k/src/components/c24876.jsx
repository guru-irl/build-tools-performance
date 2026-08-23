import React from 'react';
const LABEL_24876 = 'component_24876';
export function Component24876({ value = 24876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24876, 'data-value': derived.doubled }, children);
}
export default Component24876;
