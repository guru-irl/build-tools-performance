import React from 'react';
const LABEL_40406 = 'component_40406';
export function Component40406({ value = 40406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40406, 'data-value': derived.doubled }, children);
}
export default Component40406;
