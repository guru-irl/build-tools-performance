import React from 'react';
const LABEL_42727 = 'component_42727';
export function Component42727({ value = 42727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42727, 'data-value': derived.doubled }, children);
}
export default Component42727;
