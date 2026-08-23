import React from 'react';
const LABEL_42964 = 'component_42964';
export function Component42964({ value = 42964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42964, 'data-value': derived.doubled }, children);
}
export default Component42964;
