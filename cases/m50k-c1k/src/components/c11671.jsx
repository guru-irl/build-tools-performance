import React from 'react';
const LABEL_11671 = 'component_11671';
export function Component11671({ value = 11671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11671, 'data-value': derived.doubled }, children);
}
export default Component11671;
