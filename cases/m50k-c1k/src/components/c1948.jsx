import React from 'react';
const LABEL_1948 = 'component_1948';
export function Component1948({ value = 1948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1948, 'data-value': derived.doubled }, children);
}
export default Component1948;
