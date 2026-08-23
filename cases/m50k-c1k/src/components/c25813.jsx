import React from 'react';
const LABEL_25813 = 'component_25813';
export function Component25813({ value = 25813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25813, 'data-value': derived.doubled }, children);
}
export default Component25813;
