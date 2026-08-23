import React from 'react';
const LABEL_26041 = 'component_26041';
export function Component26041({ value = 26041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26041, 'data-value': derived.doubled }, children);
}
export default Component26041;
