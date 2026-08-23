import React from 'react';
const LABEL_30218 = 'component_30218';
export function Component30218({ value = 30218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30218, 'data-value': derived.doubled }, children);
}
export default Component30218;
