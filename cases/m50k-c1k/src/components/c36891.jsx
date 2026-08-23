import React from 'react';
const LABEL_36891 = 'component_36891';
export function Component36891({ value = 36891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36891, 'data-value': derived.doubled }, children);
}
export default Component36891;
