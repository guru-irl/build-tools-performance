import React from 'react';
const LABEL_38247 = 'component_38247';
export function Component38247({ value = 38247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38247, 'data-value': derived.doubled }, children);
}
export default Component38247;
