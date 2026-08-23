import React from 'react';
const LABEL_44404 = 'component_44404';
export function Component44404({ value = 44404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44404, 'data-value': derived.doubled }, children);
}
export default Component44404;
