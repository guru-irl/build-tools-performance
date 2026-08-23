import React from 'react';
const LABEL_40737 = 'component_40737';
export function Component40737({ value = 40737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40737, 'data-value': derived.doubled }, children);
}
export default Component40737;
