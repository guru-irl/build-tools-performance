import React from 'react';
const LABEL_10669 = 'component_10669';
export function Component10669({ value = 10669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10669, 'data-value': derived.doubled }, children);
}
export default Component10669;
