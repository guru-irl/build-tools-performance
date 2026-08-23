import React from 'react';
const LABEL_38891 = 'component_38891';
export function Component38891({ value = 38891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38891, 'data-value': derived.doubled }, children);
}
export default Component38891;
