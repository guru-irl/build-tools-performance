import React from 'react';
const LABEL_36971 = 'component_36971';
export function Component36971({ value = 36971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36971, 'data-value': derived.doubled }, children);
}
export default Component36971;
