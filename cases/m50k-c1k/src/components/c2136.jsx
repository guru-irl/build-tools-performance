import React from 'react';
const LABEL_2136 = 'component_2136';
export function Component2136({ value = 2136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2136, 'data-value': derived.doubled }, children);
}
export default Component2136;
