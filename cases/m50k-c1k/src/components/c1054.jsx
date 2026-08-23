import React from 'react';
const LABEL_1054 = 'component_1054';
export function Component1054({ value = 1054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1054, 'data-value': derived.doubled }, children);
}
export default Component1054;
