import React from 'react';
const LABEL_1939 = 'component_1939';
export function Component1939({ value = 1939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1939, 'data-value': derived.doubled }, children);
}
export default Component1939;
