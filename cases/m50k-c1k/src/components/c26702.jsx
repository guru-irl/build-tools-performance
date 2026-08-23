import React from 'react';
const LABEL_26702 = 'component_26702';
export function Component26702({ value = 26702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26702, 'data-value': derived.doubled }, children);
}
export default Component26702;
