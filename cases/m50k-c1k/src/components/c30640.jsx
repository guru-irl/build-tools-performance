import React from 'react';
const LABEL_30640 = 'component_30640';
export function Component30640({ value = 30640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30640, 'data-value': derived.doubled }, children);
}
export default Component30640;
