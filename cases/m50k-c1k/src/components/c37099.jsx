import React from 'react';
const LABEL_37099 = 'component_37099';
export function Component37099({ value = 37099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37099, 'data-value': derived.doubled }, children);
}
export default Component37099;
