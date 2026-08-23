import React from 'react';
const LABEL_23585 = 'component_23585';
export function Component23585({ value = 23585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23585, 'data-value': derived.doubled }, children);
}
export default Component23585;
