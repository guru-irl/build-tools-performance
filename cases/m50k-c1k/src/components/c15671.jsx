import React from 'react';
const LABEL_15671 = 'component_15671';
export function Component15671({ value = 15671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15671, 'data-value': derived.doubled }, children);
}
export default Component15671;
