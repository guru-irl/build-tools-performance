import React from 'react';
const LABEL_6971 = 'component_6971';
export function Component6971({ value = 6971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6971, 'data-value': derived.doubled }, children);
}
export default Component6971;
