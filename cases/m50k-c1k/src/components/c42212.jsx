import React from 'react';
const LABEL_42212 = 'component_42212';
export function Component42212({ value = 42212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42212, 'data-value': derived.doubled }, children);
}
export default Component42212;
