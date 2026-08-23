import React from 'react';
const LABEL_11948 = 'component_11948';
export function Component11948({ value = 11948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11948, 'data-value': derived.doubled }, children);
}
export default Component11948;
