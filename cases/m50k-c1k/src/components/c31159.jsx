import React from 'react';
const LABEL_31159 = 'component_31159';
export function Component31159({ value = 31159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31159, 'data-value': derived.doubled }, children);
}
export default Component31159;
