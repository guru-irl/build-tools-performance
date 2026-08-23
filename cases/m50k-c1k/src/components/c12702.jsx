import React from 'react';
const LABEL_12702 = 'component_12702';
export function Component12702({ value = 12702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12702, 'data-value': derived.doubled }, children);
}
export default Component12702;
