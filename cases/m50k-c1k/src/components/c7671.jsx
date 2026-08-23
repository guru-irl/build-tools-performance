import React from 'react';
const LABEL_7671 = 'component_7671';
export function Component7671({ value = 7671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7671, 'data-value': derived.doubled }, children);
}
export default Component7671;
