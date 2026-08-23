import React from 'react';
const LABEL_37390 = 'component_37390';
export function Component37390({ value = 37390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37390, 'data-value': derived.doubled }, children);
}
export default Component37390;
