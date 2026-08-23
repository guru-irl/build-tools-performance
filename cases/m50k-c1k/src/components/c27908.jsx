import React from 'react';
const LABEL_27908 = 'component_27908';
export function Component27908({ value = 27908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27908, 'data-value': derived.doubled }, children);
}
export default Component27908;
