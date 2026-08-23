import React from 'react';
const LABEL_25829 = 'component_25829';
export function Component25829({ value = 25829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25829, 'data-value': derived.doubled }, children);
}
export default Component25829;
