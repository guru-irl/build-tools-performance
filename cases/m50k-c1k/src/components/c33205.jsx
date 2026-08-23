import React from 'react';
const LABEL_33205 = 'component_33205';
export function Component33205({ value = 33205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33205, 'data-value': derived.doubled }, children);
}
export default Component33205;
