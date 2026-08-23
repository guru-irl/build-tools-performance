import React from 'react';
const LABEL_40702 = 'component_40702';
export function Component40702({ value = 40702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40702, 'data-value': derived.doubled }, children);
}
export default Component40702;
