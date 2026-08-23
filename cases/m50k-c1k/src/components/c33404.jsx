import React from 'react';
const LABEL_33404 = 'component_33404';
export function Component33404({ value = 33404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33404, 'data-value': derived.doubled }, children);
}
export default Component33404;
