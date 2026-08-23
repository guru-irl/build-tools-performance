import React from 'react';
const LABEL_42812 = 'component_42812';
export function Component42812({ value = 42812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42812, 'data-value': derived.doubled }, children);
}
export default Component42812;
