import React from 'react';
const LABEL_37229 = 'component_37229';
export function Component37229({ value = 37229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37229, 'data-value': derived.doubled }, children);
}
export default Component37229;
