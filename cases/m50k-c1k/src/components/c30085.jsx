import React from 'react';
const LABEL_30085 = 'component_30085';
export function Component30085({ value = 30085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30085, 'data-value': derived.doubled }, children);
}
export default Component30085;
