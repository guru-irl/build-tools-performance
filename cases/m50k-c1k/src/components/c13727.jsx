import React from 'react';
const LABEL_13727 = 'component_13727';
export function Component13727({ value = 13727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13727, 'data-value': derived.doubled }, children);
}
export default Component13727;
