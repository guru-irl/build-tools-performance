import React from 'react';
const LABEL_18215 = 'component_18215';
export function Component18215({ value = 18215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18215, 'data-value': derived.doubled }, children);
}
export default Component18215;
