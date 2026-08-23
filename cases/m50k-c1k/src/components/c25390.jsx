import React from 'react';
const LABEL_25390 = 'component_25390';
export function Component25390({ value = 25390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25390, 'data-value': derived.doubled }, children);
}
export default Component25390;
