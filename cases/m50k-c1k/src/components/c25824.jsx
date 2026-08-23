import React from 'react';
const LABEL_25824 = 'component_25824';
export function Component25824({ value = 25824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25824, 'data-value': derived.doubled }, children);
}
export default Component25824;
