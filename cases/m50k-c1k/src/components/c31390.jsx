import React from 'react';
const LABEL_31390 = 'component_31390';
export function Component31390({ value = 31390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31390, 'data-value': derived.doubled }, children);
}
export default Component31390;
