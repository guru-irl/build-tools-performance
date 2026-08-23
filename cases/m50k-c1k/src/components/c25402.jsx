import React from 'react';
const LABEL_25402 = 'component_25402';
export function Component25402({ value = 25402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25402, 'data-value': derived.doubled }, children);
}
export default Component25402;
