import React from 'react';
const LABEL_7461 = 'component_7461';
export function Component7461({ value = 7461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7461, 'data-value': derived.doubled }, children);
}
export default Component7461;
