import React from 'react';
const LABEL_14924 = 'component_14924';
export function Component14924({ value = 14924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14924, 'data-value': derived.doubled }, children);
}
export default Component14924;
