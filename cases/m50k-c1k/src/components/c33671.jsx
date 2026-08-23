import React from 'react';
const LABEL_33671 = 'component_33671';
export function Component33671({ value = 33671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33671, 'data-value': derived.doubled }, children);
}
export default Component33671;
