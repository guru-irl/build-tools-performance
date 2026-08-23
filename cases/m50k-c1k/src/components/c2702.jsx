import React from 'react';
const LABEL_2702 = 'component_2702';
export function Component2702({ value = 2702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2702, 'data-value': derived.doubled }, children);
}
export default Component2702;
