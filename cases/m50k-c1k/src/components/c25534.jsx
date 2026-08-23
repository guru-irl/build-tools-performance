import React from 'react';
const LABEL_25534 = 'component_25534';
export function Component25534({ value = 25534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25534, 'data-value': derived.doubled }, children);
}
export default Component25534;
