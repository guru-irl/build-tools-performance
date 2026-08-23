import React from 'react';
const LABEL_42551 = 'component_42551';
export function Component42551({ value = 42551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42551, 'data-value': derived.doubled }, children);
}
export default Component42551;
