import React from 'react';
const LABEL_34813 = 'component_34813';
export function Component34813({ value = 34813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34813, 'data-value': derived.doubled }, children);
}
export default Component34813;
