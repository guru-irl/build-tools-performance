import React from 'react';
const LABEL_15330 = 'component_15330';
export function Component15330({ value = 15330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15330, 'data-value': derived.doubled }, children);
}
export default Component15330;
