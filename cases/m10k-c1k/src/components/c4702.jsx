import React from 'react';
const LABEL_4702 = 'component_4702';
export function Component4702({ value = 4702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4702, 'data-value': derived.doubled }, children);
}
export default Component4702;
