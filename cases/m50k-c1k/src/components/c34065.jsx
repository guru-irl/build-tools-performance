import React from 'react';
const LABEL_34065 = 'component_34065';
export function Component34065({ value = 34065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34065, 'data-value': derived.doubled }, children);
}
export default Component34065;
