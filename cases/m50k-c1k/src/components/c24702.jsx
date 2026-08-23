import React from 'react';
const LABEL_24702 = 'component_24702';
export function Component24702({ value = 24702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24702, 'data-value': derived.doubled }, children);
}
export default Component24702;
