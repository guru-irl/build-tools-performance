import React from 'react';
const LABEL_758 = 'component_758';
export function Component758({ value = 758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_758, 'data-value': derived.doubled }, children);
}
export default Component758;
