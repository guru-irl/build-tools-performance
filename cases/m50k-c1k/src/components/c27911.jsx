import React from 'react';
const LABEL_27911 = 'component_27911';
export function Component27911({ value = 27911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27911, 'data-value': derived.doubled }, children);
}
export default Component27911;
