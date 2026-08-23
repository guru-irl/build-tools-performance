import React from 'react';
const LABEL_38682 = 'component_38682';
export function Component38682({ value = 38682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38682, 'data-value': derived.doubled }, children);
}
export default Component38682;
