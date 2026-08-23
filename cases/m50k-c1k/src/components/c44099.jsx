import React from 'react';
const LABEL_44099 = 'component_44099';
export function Component44099({ value = 44099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44099, 'data-value': derived.doubled }, children);
}
export default Component44099;
