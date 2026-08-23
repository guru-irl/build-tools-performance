import React from 'react';
const LABEL_1755 = 'component_1755';
export function Component1755({ value = 1755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1755, 'data-value': derived.doubled }, children);
}
export default Component1755;
