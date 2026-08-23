import React from 'react';
const LABEL_14192 = 'component_14192';
export function Component14192({ value = 14192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14192, 'data-value': derived.doubled }, children);
}
export default Component14192;
