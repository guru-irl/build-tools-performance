import React from 'react';
const LABEL_22515 = 'component_22515';
export function Component22515({ value = 22515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22515, 'data-value': derived.doubled }, children);
}
export default Component22515;
