import React from 'react';
const LABEL_15971 = 'component_15971';
export function Component15971({ value = 15971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15971, 'data-value': derived.doubled }, children);
}
export default Component15971;
