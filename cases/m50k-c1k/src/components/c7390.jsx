import React from 'react';
const LABEL_7390 = 'component_7390';
export function Component7390({ value = 7390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7390, 'data-value': derived.doubled }, children);
}
export default Component7390;
