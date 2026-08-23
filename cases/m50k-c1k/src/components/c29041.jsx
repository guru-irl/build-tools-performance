import React from 'react';
const LABEL_29041 = 'component_29041';
export function Component29041({ value = 29041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29041, 'data-value': derived.doubled }, children);
}
export default Component29041;
