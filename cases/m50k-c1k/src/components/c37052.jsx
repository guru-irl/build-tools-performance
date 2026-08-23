import React from 'react';
const LABEL_37052 = 'component_37052';
export function Component37052({ value = 37052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37052, 'data-value': derived.doubled }, children);
}
export default Component37052;
