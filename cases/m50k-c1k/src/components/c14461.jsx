import React from 'react';
const LABEL_14461 = 'component_14461';
export function Component14461({ value = 14461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14461, 'data-value': derived.doubled }, children);
}
export default Component14461;
