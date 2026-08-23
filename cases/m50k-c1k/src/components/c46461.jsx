import React from 'react';
const LABEL_46461 = 'component_46461';
export function Component46461({ value = 46461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46461, 'data-value': derived.doubled }, children);
}
export default Component46461;
