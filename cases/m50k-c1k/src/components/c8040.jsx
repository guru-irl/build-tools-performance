import React from 'react';
const LABEL_8040 = 'component_8040';
export function Component8040({ value = 8040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8040, 'data-value': derived.doubled }, children);
}
export default Component8040;
