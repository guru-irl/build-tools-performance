import React from 'react';
const LABEL_34247 = 'component_34247';
export function Component34247({ value = 34247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34247, 'data-value': derived.doubled }, children);
}
export default Component34247;
