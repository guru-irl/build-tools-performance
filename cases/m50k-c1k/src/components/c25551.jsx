import React from 'react';
const LABEL_25551 = 'component_25551';
export function Component25551({ value = 25551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25551, 'data-value': derived.doubled }, children);
}
export default Component25551;
