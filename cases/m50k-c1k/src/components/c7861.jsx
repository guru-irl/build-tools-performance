import React from 'react';
const LABEL_7861 = 'component_7861';
export function Component7861({ value = 7861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7861, 'data-value': derived.doubled }, children);
}
export default Component7861;
