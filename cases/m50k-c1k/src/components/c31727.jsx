import React from 'react';
const LABEL_31727 = 'component_31727';
export function Component31727({ value = 31727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31727, 'data-value': derived.doubled }, children);
}
export default Component31727;
