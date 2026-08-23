import React from 'react';
const LABEL_32702 = 'component_32702';
export function Component32702({ value = 32702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32702, 'data-value': derived.doubled }, children);
}
export default Component32702;
