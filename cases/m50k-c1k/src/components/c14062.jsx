import React from 'react';
const LABEL_14062 = 'component_14062';
export function Component14062({ value = 14062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14062, 'data-value': derived.doubled }, children);
}
export default Component14062;
