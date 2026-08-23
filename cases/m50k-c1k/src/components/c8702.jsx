import React from 'react';
const LABEL_8702 = 'component_8702';
export function Component8702({ value = 8702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8702, 'data-value': derived.doubled }, children);
}
export default Component8702;
