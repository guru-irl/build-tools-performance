import React from 'react';
const LABEL_3404 = 'component_3404';
export function Component3404({ value = 3404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3404, 'data-value': derived.doubled }, children);
}
export default Component3404;
