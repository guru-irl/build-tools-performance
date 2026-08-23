import React from 'react';
const LABEL_14624 = 'component_14624';
export function Component14624({ value = 14624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14624, 'data-value': derived.doubled }, children);
}
export default Component14624;
