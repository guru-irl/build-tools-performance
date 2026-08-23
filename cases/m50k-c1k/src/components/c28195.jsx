import React from 'react';
const LABEL_28195 = 'component_28195';
export function Component28195({ value = 28195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28195, 'data-value': derived.doubled }, children);
}
export default Component28195;
