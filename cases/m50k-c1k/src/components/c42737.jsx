import React from 'react';
const LABEL_42737 = 'component_42737';
export function Component42737({ value = 42737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42737, 'data-value': derived.doubled }, children);
}
export default Component42737;
