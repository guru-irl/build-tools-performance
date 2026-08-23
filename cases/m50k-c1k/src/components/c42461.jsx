import React from 'react';
const LABEL_42461 = 'component_42461';
export function Component42461({ value = 42461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42461, 'data-value': derived.doubled }, children);
}
export default Component42461;
