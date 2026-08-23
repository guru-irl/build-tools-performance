import React from 'react';
const LABEL_37404 = 'component_37404';
export function Component37404({ value = 37404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37404, 'data-value': derived.doubled }, children);
}
export default Component37404;
