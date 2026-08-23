import React from 'react';
const LABEL_30109 = 'component_30109';
export function Component30109({ value = 30109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30109, 'data-value': derived.doubled }, children);
}
export default Component30109;
