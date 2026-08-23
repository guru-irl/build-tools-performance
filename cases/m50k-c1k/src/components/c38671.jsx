import React from 'react';
const LABEL_38671 = 'component_38671';
export function Component38671({ value = 38671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38671, 'data-value': derived.doubled }, children);
}
export default Component38671;
