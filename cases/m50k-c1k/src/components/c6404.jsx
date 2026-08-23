import React from 'react';
const LABEL_6404 = 'component_6404';
export function Component6404({ value = 6404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6404, 'data-value': derived.doubled }, children);
}
export default Component6404;
