import React from 'react';
const LABEL_627 = 'component_627';
export function Component627({ value = 627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_627, 'data-value': derived.doubled }, children);
}
export default Component627;
