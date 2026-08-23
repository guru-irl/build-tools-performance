import React from 'react';
const LABEL_25404 = 'component_25404';
export function Component25404({ value = 25404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25404, 'data-value': derived.doubled }, children);
}
export default Component25404;
