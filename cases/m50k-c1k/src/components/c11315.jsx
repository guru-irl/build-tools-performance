import React from 'react';
const LABEL_11315 = 'component_11315';
export function Component11315({ value = 11315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11315, 'data-value': derived.doubled }, children);
}
export default Component11315;
