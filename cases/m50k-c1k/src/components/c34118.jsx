import React from 'react';
const LABEL_34118 = 'component_34118';
export function Component34118({ value = 34118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34118, 'data-value': derived.doubled }, children);
}
export default Component34118;
