import React from 'react';
const LABEL_36629 = 'component_36629';
export function Component36629({ value = 36629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36629, 'data-value': derived.doubled }, children);
}
export default Component36629;
