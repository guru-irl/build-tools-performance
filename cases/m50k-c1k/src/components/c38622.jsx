import React from 'react';
const LABEL_38622 = 'component_38622';
export function Component38622({ value = 38622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38622, 'data-value': derived.doubled }, children);
}
export default Component38622;
