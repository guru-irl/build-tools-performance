import React from 'react';
const LABEL_1212 = 'component_1212';
export function Component1212({ value = 1212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1212, 'data-value': derived.doubled }, children);
}
export default Component1212;
