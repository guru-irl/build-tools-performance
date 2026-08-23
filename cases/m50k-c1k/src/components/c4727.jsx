import React from 'react';
const LABEL_4727 = 'component_4727';
export function Component4727({ value = 4727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4727, 'data-value': derived.doubled }, children);
}
export default Component4727;
