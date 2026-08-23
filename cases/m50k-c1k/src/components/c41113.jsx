import React from 'react';
const LABEL_41113 = 'component_41113';
export function Component41113({ value = 41113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41113, 'data-value': derived.doubled }, children);
}
export default Component41113;
