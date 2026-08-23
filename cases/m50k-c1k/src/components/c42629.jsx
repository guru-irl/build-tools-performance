import React from 'react';
const LABEL_42629 = 'component_42629';
export function Component42629({ value = 42629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42629, 'data-value': derived.doubled }, children);
}
export default Component42629;
