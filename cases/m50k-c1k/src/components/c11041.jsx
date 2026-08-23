import React from 'react';
const LABEL_11041 = 'component_11041';
export function Component11041({ value = 11041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11041, 'data-value': derived.doubled }, children);
}
export default Component11041;
