import React from 'react';
const LABEL_6861 = 'component_6861';
export function Component6861({ value = 6861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6861, 'data-value': derived.doubled }, children);
}
export default Component6861;
