import React from 'react';
const LABEL_15353 = 'component_15353';
export function Component15353({ value = 15353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15353, 'data-value': derived.doubled }, children);
}
export default Component15353;
