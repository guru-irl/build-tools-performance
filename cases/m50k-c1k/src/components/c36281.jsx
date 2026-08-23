import React from 'react';
const LABEL_36281 = 'component_36281';
export function Component36281({ value = 36281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36281, 'data-value': derived.doubled }, children);
}
export default Component36281;
