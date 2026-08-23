import React from 'react';
const LABEL_7702 = 'component_7702';
export function Component7702({ value = 7702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7702, 'data-value': derived.doubled }, children);
}
export default Component7702;
