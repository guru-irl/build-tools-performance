import React from 'react';
const LABEL_38041 = 'component_38041';
export function Component38041({ value = 38041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38041, 'data-value': derived.doubled }, children);
}
export default Component38041;
