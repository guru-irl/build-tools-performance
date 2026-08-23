import React from 'react';
const LABEL_13702 = 'component_13702';
export function Component13702({ value = 13702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13702, 'data-value': derived.doubled }, children);
}
export default Component13702;
