import React from 'react';
const LABEL_25169 = 'component_25169';
export function Component25169({ value = 25169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25169, 'data-value': derived.doubled }, children);
}
export default Component25169;
