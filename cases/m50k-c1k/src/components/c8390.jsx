import React from 'react';
const LABEL_8390 = 'component_8390';
export function Component8390({ value = 8390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8390, 'data-value': derived.doubled }, children);
}
export default Component8390;
