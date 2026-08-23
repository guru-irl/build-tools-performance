import React from 'react';
const LABEL_33727 = 'component_33727';
export function Component33727({ value = 33727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33727, 'data-value': derived.doubled }, children);
}
export default Component33727;
