import React from 'react';
const LABEL_36261 = 'component_36261';
export function Component36261({ value = 36261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36261, 'data-value': derived.doubled }, children);
}
export default Component36261;
