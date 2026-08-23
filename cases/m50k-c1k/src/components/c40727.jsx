import React from 'react';
const LABEL_40727 = 'component_40727';
export function Component40727({ value = 40727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40727, 'data-value': derived.doubled }, children);
}
export default Component40727;
