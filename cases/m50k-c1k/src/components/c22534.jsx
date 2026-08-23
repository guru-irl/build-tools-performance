import React from 'react';
const LABEL_22534 = 'component_22534';
export function Component22534({ value = 22534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22534, 'data-value': derived.doubled }, children);
}
export default Component22534;
