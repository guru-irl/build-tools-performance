import React from 'react';
const LABEL_15791 = 'component_15791';
export function Component15791({ value = 15791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15791, 'data-value': derived.doubled }, children);
}
export default Component15791;
