import React from 'react';
const LABEL_11198 = 'component_11198';
export function Component11198({ value = 11198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11198, 'data-value': derived.doubled }, children);
}
export default Component11198;
