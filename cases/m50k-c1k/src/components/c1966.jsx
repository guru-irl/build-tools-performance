import React from 'react';
const LABEL_1966 = 'component_1966';
export function Component1966({ value = 1966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1966, 'data-value': derived.doubled }, children);
}
export default Component1966;
