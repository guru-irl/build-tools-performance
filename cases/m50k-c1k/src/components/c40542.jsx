import React from 'react';
const LABEL_40542 = 'component_40542';
export function Component40542({ value = 40542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40542, 'data-value': derived.doubled }, children);
}
export default Component40542;
