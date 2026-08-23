import React from 'react';
const LABEL_18404 = 'component_18404';
export function Component18404({ value = 18404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18404, 'data-value': derived.doubled }, children);
}
export default Component18404;
