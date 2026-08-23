import React from 'react';
const LABEL_8033 = 'component_8033';
export function Component8033({ value = 8033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8033, 'data-value': derived.doubled }, children);
}
export default Component8033;
