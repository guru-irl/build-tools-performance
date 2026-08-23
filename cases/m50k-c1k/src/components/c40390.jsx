import React from 'react';
const LABEL_40390 = 'component_40390';
export function Component40390({ value = 40390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40390, 'data-value': derived.doubled }, children);
}
export default Component40390;
