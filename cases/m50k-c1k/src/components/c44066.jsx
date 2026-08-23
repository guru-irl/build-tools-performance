import React from 'react';
const LABEL_44066 = 'component_44066';
export function Component44066({ value = 44066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44066, 'data-value': derived.doubled }, children);
}
export default Component44066;
