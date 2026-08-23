import React from 'react';
const LABEL_1964 = 'component_1964';
export function Component1964({ value = 1964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1964, 'data-value': derived.doubled }, children);
}
export default Component1964;
