import React from 'react';
const LABEL_32306 = 'component_32306';
export function Component32306({ value = 32306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32306, 'data-value': derived.doubled }, children);
}
export default Component32306;
