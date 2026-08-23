import React from 'react';
const LABEL_36727 = 'component_36727';
export function Component36727({ value = 36727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36727, 'data-value': derived.doubled }, children);
}
export default Component36727;
