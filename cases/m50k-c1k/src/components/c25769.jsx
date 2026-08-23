import React from 'react';
const LABEL_25769 = 'component_25769';
export function Component25769({ value = 25769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25769, 'data-value': derived.doubled }, children);
}
export default Component25769;
