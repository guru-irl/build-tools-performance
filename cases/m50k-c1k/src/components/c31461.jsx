import React from 'react';
const LABEL_31461 = 'component_31461';
export function Component31461({ value = 31461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31461, 'data-value': derived.doubled }, children);
}
export default Component31461;
