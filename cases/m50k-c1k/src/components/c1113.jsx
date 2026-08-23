import React from 'react';
const LABEL_1113 = 'component_1113';
export function Component1113({ value = 1113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1113, 'data-value': derived.doubled }, children);
}
export default Component1113;
