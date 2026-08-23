import React from 'react';
const LABEL_22404 = 'component_22404';
export function Component22404({ value = 22404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22404, 'data-value': derived.doubled }, children);
}
export default Component22404;
