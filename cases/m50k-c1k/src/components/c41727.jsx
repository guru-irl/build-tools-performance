import React from 'react';
const LABEL_41727 = 'component_41727';
export function Component41727({ value = 41727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41727, 'data-value': derived.doubled }, children);
}
export default Component41727;
