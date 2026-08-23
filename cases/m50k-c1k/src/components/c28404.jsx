import React from 'react';
const LABEL_28404 = 'component_28404';
export function Component28404({ value = 28404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28404, 'data-value': derived.doubled }, children);
}
export default Component28404;
