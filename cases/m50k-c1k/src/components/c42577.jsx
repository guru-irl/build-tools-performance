import React from 'react';
const LABEL_42577 = 'component_42577';
export function Component42577({ value = 42577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42577, 'data-value': derived.doubled }, children);
}
export default Component42577;
