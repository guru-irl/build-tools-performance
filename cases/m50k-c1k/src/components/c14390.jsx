import React from 'react';
const LABEL_14390 = 'component_14390';
export function Component14390({ value = 14390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14390, 'data-value': derived.doubled }, children);
}
export default Component14390;
