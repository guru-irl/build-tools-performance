import React from 'react';
const LABEL_11254 = 'component_11254';
export function Component11254({ value = 11254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11254, 'data-value': derived.doubled }, children);
}
export default Component11254;
