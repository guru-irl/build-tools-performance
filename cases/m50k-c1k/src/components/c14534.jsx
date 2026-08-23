import React from 'react';
const LABEL_14534 = 'component_14534';
export function Component14534({ value = 14534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14534, 'data-value': derived.doubled }, children);
}
export default Component14534;
