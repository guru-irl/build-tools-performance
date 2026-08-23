import React from 'react';
const LABEL_26551 = 'component_26551';
export function Component26551({ value = 26551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26551, 'data-value': derived.doubled }, children);
}
export default Component26551;
