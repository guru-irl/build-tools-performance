import React from 'react';
const LABEL_5702 = 'component_5702';
export function Component5702({ value = 5702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5702, 'data-value': derived.doubled }, children);
}
export default Component5702;
