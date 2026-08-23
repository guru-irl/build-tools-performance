import React from 'react';
const LABEL_42542 = 'component_42542';
export function Component42542({ value = 42542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42542, 'data-value': derived.doubled }, children);
}
export default Component42542;
