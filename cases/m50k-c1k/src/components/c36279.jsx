import React from 'react';
const LABEL_36279 = 'component_36279';
export function Component36279({ value = 36279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36279, 'data-value': derived.doubled }, children);
}
export default Component36279;
