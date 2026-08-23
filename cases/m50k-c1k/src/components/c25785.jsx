import React from 'react';
const LABEL_25785 = 'component_25785';
export function Component25785({ value = 25785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25785, 'data-value': derived.doubled }, children);
}
export default Component25785;
