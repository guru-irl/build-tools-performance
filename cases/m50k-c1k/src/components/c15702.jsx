import React from 'react';
const LABEL_15702 = 'component_15702';
export function Component15702({ value = 15702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15702, 'data-value': derived.doubled }, children);
}
export default Component15702;
