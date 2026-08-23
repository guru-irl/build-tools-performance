import React from 'react';
const LABEL_4461 = 'component_4461';
export function Component4461({ value = 4461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4461, 'data-value': derived.doubled }, children);
}
export default Component4461;
