import React from 'react';
const LABEL_46404 = 'component_46404';
export function Component46404({ value = 46404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46404, 'data-value': derived.doubled }, children);
}
export default Component46404;
