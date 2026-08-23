import React from 'react';
const LABEL_3199 = 'component_3199';
export function Component3199({ value = 3199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3199, 'data-value': derived.doubled }, children);
}
export default Component3199;
