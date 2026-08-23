import React from 'react';
const LABEL_42262 = 'component_42262';
export function Component42262({ value = 42262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42262, 'data-value': derived.doubled }, children);
}
export default Component42262;
