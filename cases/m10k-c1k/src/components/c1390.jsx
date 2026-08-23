import React from 'react';
const LABEL_1390 = 'component_1390';
export function Component1390({ value = 1390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1390, 'data-value': derived.doubled }, children);
}
export default Component1390;
