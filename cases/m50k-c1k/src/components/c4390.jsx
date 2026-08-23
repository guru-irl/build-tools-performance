import React from 'react';
const LABEL_4390 = 'component_4390';
export function Component4390({ value = 4390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4390, 'data-value': derived.doubled }, children);
}
export default Component4390;
