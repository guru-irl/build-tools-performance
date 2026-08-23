import React from 'react';
const LABEL_3534 = 'component_3534';
export function Component3534({ value = 3534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3534, 'data-value': derived.doubled }, children);
}
export default Component3534;
