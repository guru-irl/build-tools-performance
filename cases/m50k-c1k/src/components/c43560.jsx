import React from 'react';
const LABEL_43560 = 'component_43560';
export function Component43560({ value = 43560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43560, 'data-value': derived.doubled }, children);
}
export default Component43560;
