import React from 'react';
const LABEL_25727 = 'component_25727';
export function Component25727({ value = 25727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25727, 'data-value': derived.doubled }, children);
}
export default Component25727;
