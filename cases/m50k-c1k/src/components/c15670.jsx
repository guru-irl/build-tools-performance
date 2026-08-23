import React from 'react';
const LABEL_15670 = 'component_15670';
export function Component15670({ value = 15670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15670, 'data-value': derived.doubled }, children);
}
export default Component15670;
