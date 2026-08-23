import React from 'react';
const LABEL_42068 = 'component_42068';
export function Component42068({ value = 42068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42068, 'data-value': derived.doubled }, children);
}
export default Component42068;
