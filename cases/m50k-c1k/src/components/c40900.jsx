import React from 'react';
const LABEL_40900 = 'component_40900';
export function Component40900({ value = 40900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40900, 'data-value': derived.doubled }, children);
}
export default Component40900;
