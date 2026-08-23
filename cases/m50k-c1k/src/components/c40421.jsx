import React from 'react';
const LABEL_40421 = 'component_40421';
export function Component40421({ value = 40421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40421, 'data-value': derived.doubled }, children);
}
export default Component40421;
