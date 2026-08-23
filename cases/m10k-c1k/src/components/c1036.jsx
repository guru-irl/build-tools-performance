import React from 'react';
const LABEL_1036 = 'component_1036';
export function Component1036({ value = 1036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1036, 'data-value': derived.doubled }, children);
}
export default Component1036;
