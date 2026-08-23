import React from 'react';
const LABEL_18461 = 'component_18461';
export function Component18461({ value = 18461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18461, 'data-value': derived.doubled }, children);
}
export default Component18461;
