import React from 'react';
const LABEL_1962 = 'component_1962';
export function Component1962({ value = 1962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1962, 'data-value': derived.doubled }, children);
}
export default Component1962;
