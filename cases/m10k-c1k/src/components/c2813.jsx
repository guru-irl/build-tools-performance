import React from 'react';
const LABEL_2813 = 'component_2813';
export function Component2813({ value = 2813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2813, 'data-value': derived.doubled }, children);
}
export default Component2813;
