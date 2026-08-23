import React from 'react';
const LABEL_7041 = 'component_7041';
export function Component7041({ value = 7041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7041, 'data-value': derived.doubled }, children);
}
export default Component7041;
