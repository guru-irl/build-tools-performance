import React from 'react';
const LABEL_118 = 'component_118';
export function Component118({ value = 118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_118, 'data-value': derived.doubled }, children);
}
export default Component118;
