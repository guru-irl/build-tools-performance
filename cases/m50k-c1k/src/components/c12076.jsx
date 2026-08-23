import React from 'react';
const LABEL_12076 = 'component_12076';
export function Component12076({ value = 12076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12076, 'data-value': derived.doubled }, children);
}
export default Component12076;
