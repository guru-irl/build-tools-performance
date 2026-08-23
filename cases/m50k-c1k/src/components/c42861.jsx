import React from 'react';
const LABEL_42861 = 'component_42861';
export function Component42861({ value = 42861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42861, 'data-value': derived.doubled }, children);
}
export default Component42861;
