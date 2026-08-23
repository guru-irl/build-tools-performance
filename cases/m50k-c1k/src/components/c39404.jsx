import React from 'react';
const LABEL_39404 = 'component_39404';
export function Component39404({ value = 39404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39404, 'data-value': derived.doubled }, children);
}
export default Component39404;
