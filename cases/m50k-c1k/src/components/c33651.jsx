import React from 'react';
const LABEL_33651 = 'component_33651';
export function Component33651({ value = 33651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33651, 'data-value': derived.doubled }, children);
}
export default Component33651;
