import React from 'react';
const LABEL_34466 = 'component_34466';
export function Component34466({ value = 34466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34466, 'data-value': derived.doubled }, children);
}
export default Component34466;
