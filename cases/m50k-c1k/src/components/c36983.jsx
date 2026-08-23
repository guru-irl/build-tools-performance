import React from 'react';
const LABEL_36983 = 'component_36983';
export function Component36983({ value = 36983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36983, 'data-value': derived.doubled }, children);
}
export default Component36983;
