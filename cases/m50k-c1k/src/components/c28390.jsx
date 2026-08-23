import React from 'react';
const LABEL_28390 = 'component_28390';
export function Component28390({ value = 28390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28390, 'data-value': derived.doubled }, children);
}
export default Component28390;
