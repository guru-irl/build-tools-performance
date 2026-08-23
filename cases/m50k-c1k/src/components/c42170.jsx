import React from 'react';
const LABEL_42170 = 'component_42170';
export function Component42170({ value = 42170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42170, 'data-value': derived.doubled }, children);
}
export default Component42170;
