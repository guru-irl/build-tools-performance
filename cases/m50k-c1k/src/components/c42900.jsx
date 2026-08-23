import React from 'react';
const LABEL_42900 = 'component_42900';
export function Component42900({ value = 42900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42900, 'data-value': derived.doubled }, children);
}
export default Component42900;
