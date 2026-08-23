import React from 'react';
const LABEL_38551 = 'component_38551';
export function Component38551({ value = 38551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38551, 'data-value': derived.doubled }, children);
}
export default Component38551;
