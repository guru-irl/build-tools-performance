import React from 'react';
const LABEL_1033 = 'component_1033';
export function Component1033({ value = 1033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1033, 'data-value': derived.doubled }, children);
}
export default Component1033;
