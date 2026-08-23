import React from 'react';
const LABEL_11050 = 'component_11050';
export function Component11050({ value = 11050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11050, 'data-value': derived.doubled }, children);
}
export default Component11050;
