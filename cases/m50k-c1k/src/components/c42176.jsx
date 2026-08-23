import React from 'react';
const LABEL_42176 = 'component_42176';
export function Component42176({ value = 42176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42176, 'data-value': derived.doubled }, children);
}
export default Component42176;
