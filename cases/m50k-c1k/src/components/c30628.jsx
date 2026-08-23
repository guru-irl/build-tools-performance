import React from 'react';
const LABEL_30628 = 'component_30628';
export function Component30628({ value = 30628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30628, 'data-value': derived.doubled }, children);
}
export default Component30628;
