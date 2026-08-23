import React from 'react';
const LABEL_25860 = 'component_25860';
export function Component25860({ value = 25860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25860, 'data-value': derived.doubled }, children);
}
export default Component25860;
