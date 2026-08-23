import React from 'react';
const LABEL_14562 = 'component_14562';
export function Component14562({ value = 14562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14562, 'data-value': derived.doubled }, children);
}
export default Component14562;
