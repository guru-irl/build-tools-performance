import React from 'react';
const LABEL_14827 = 'component_14827';
export function Component14827({ value = 14827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14827, 'data-value': derived.doubled }, children);
}
export default Component14827;
