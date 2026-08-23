import React from 'react';
const LABEL_30404 = 'component_30404';
export function Component30404({ value = 30404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30404, 'data-value': derived.doubled }, children);
}
export default Component30404;
