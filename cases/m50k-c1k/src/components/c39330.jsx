import React from 'react';
const LABEL_39330 = 'component_39330';
export function Component39330({ value = 39330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39330, 'data-value': derived.doubled }, children);
}
export default Component39330;
