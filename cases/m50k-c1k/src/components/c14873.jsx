import React from 'react';
const LABEL_14873 = 'component_14873';
export function Component14873({ value = 14873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14873, 'data-value': derived.doubled }, children);
}
export default Component14873;
