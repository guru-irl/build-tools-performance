import React from 'react';
const LABEL_8461 = 'component_8461';
export function Component8461({ value = 8461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8461, 'data-value': derived.doubled }, children);
}
export default Component8461;
