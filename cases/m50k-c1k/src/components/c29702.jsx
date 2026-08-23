import React from 'react';
const LABEL_29702 = 'component_29702';
export function Component29702({ value = 29702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29702, 'data-value': derived.doubled }, children);
}
export default Component29702;
