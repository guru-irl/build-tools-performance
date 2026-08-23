import React from 'react';
const LABEL_40041 = 'component_40041';
export function Component40041({ value = 40041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40041, 'data-value': derived.doubled }, children);
}
export default Component40041;
