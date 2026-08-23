import React from 'react';
const LABEL_30904 = 'component_30904';
export function Component30904({ value = 30904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30904, 'data-value': derived.doubled }, children);
}
export default Component30904;
