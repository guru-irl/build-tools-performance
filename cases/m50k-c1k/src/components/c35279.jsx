import React from 'react';
const LABEL_35279 = 'component_35279';
export function Component35279({ value = 35279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35279, 'data-value': derived.doubled }, children);
}
export default Component35279;
