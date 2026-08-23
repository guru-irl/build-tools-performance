import React from 'react';
const LABEL_20702 = 'component_20702';
export function Component20702({ value = 20702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20702, 'data-value': derived.doubled }, children);
}
export default Component20702;
