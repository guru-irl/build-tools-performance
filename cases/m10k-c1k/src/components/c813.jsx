import React from 'react';
const LABEL_813 = 'component_813';
export function Component813({ value = 813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_813, 'data-value': derived.doubled }, children);
}
export default Component813;
