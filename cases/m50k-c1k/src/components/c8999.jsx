import React from 'react';
const LABEL_8999 = 'component_8999';
export function Component8999({ value = 8999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8999, 'data-value': derived.doubled }, children);
}
export default Component8999;
