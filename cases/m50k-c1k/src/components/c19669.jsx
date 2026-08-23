import React from 'react';
const LABEL_19669 = 'component_19669';
export function Component19669({ value = 19669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19669, 'data-value': derived.doubled }, children);
}
export default Component19669;
