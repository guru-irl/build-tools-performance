import React from 'react';
const LABEL_30926 = 'component_30926';
export function Component30926({ value = 30926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30926, 'data-value': derived.doubled }, children);
}
export default Component30926;
