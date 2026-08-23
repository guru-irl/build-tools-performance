import React from 'react';
const LABEL_42634 = 'component_42634';
export function Component42634({ value = 42634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42634, 'data-value': derived.doubled }, children);
}
export default Component42634;
