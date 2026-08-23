import React from 'react';
const LABEL_15727 = 'component_15727';
export function Component15727({ value = 15727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15727, 'data-value': derived.doubled }, children);
}
export default Component15727;
