import React from 'react';
const LABEL_6624 = 'component_6624';
export function Component6624({ value = 6624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6624, 'data-value': derived.doubled }, children);
}
export default Component6624;
