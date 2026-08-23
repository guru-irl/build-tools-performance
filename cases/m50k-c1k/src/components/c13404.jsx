import React from 'react';
const LABEL_13404 = 'component_13404';
export function Component13404({ value = 13404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13404, 'data-value': derived.doubled }, children);
}
export default Component13404;
