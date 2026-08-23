import React from 'react';
const LABEL_38717 = 'component_38717';
export function Component38717({ value = 38717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38717, 'data-value': derived.doubled }, children);
}
export default Component38717;
