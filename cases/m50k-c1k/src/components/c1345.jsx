import React from 'react';
const LABEL_1345 = 'component_1345';
export function Component1345({ value = 1345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1345, 'data-value': derived.doubled }, children);
}
export default Component1345;
