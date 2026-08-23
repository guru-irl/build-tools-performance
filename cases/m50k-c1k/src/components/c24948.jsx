import React from 'react';
const LABEL_24948 = 'component_24948';
export function Component24948({ value = 24948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24948, 'data-value': derived.doubled }, children);
}
export default Component24948;
