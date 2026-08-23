import React from 'react';
const LABEL_15184 = 'component_15184';
export function Component15184({ value = 15184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15184, 'data-value': derived.doubled }, children);
}
export default Component15184;
