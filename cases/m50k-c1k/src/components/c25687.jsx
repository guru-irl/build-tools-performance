import React from 'react';
const LABEL_25687 = 'component_25687';
export function Component25687({ value = 25687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25687, 'data-value': derived.doubled }, children);
}
export default Component25687;
