import React from 'react';
const LABEL_18702 = 'component_18702';
export function Component18702({ value = 18702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18702, 'data-value': derived.doubled }, children);
}
export default Component18702;
