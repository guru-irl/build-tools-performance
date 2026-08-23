import React from 'react';
const LABEL_5127 = 'component_5127';
export function Component5127({ value = 5127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5127, 'data-value': derived.doubled }, children);
}
export default Component5127;
