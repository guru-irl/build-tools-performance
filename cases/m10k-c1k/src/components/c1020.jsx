import React from 'react';
const LABEL_1020 = 'component_1020';
export function Component1020({ value = 1020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1020, 'data-value': derived.doubled }, children);
}
export default Component1020;
