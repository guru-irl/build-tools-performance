import React from 'react';
const LABEL_10813 = 'component_10813';
export function Component10813({ value = 10813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10813, 'data-value': derived.doubled }, children);
}
export default Component10813;
