import React from 'react';
const LABEL_25671 = 'component_25671';
export function Component25671({ value = 25671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25671, 'data-value': derived.doubled }, children);
}
export default Component25671;
