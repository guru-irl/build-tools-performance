import React from 'react';
const LABEL_42102 = 'component_42102';
export function Component42102({ value = 42102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42102, 'data-value': derived.doubled }, children);
}
export default Component42102;
