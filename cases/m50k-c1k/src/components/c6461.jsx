import React from 'react';
const LABEL_6461 = 'component_6461';
export function Component6461({ value = 6461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6461, 'data-value': derived.doubled }, children);
}
export default Component6461;
