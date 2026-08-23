import React from 'react';
const LABEL_44041 = 'component_44041';
export function Component44041({ value = 44041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44041, 'data-value': derived.doubled }, children);
}
export default Component44041;
