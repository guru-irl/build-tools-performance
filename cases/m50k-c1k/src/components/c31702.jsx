import React from 'react';
const LABEL_31702 = 'component_31702';
export function Component31702({ value = 31702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31702, 'data-value': derived.doubled }, children);
}
export default Component31702;
