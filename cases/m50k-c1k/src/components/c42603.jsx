import React from 'react';
const LABEL_42603 = 'component_42603';
export function Component42603({ value = 42603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42603, 'data-value': derived.doubled }, children);
}
export default Component42603;
