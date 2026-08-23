import React from 'react';
const LABEL_30617 = 'component_30617';
export function Component30617({ value = 30617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30617, 'data-value': derived.doubled }, children);
}
export default Component30617;
