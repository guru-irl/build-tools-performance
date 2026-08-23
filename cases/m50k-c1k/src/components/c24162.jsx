import React from 'react';
const LABEL_24162 = 'component_24162';
export function Component24162({ value = 24162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24162, 'data-value': derived.doubled }, children);
}
export default Component24162;
