import React from 'react';
const LABEL_5876 = 'component_5876';
export function Component5876({ value = 5876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5876, 'data-value': derived.doubled }, children);
}
export default Component5876;
