import React from 'react';
const LABEL_42338 = 'component_42338';
export function Component42338({ value = 42338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42338, 'data-value': derived.doubled }, children);
}
export default Component42338;
