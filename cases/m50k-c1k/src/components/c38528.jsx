import React from 'react';
const LABEL_38528 = 'component_38528';
export function Component38528({ value = 38528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38528, 'data-value': derived.doubled }, children);
}
export default Component38528;
