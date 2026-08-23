import React from 'react';
const LABEL_8623 = 'component_8623';
export function Component8623({ value = 8623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8623, 'data-value': derived.doubled }, children);
}
export default Component8623;
