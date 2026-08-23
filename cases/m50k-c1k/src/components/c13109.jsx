import React from 'react';
const LABEL_13109 = 'component_13109';
export function Component13109({ value = 13109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13109, 'data-value': derived.doubled }, children);
}
export default Component13109;
