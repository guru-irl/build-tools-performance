import React from 'react';
const LABEL_31997 = 'component_31997';
export function Component31997({ value = 31997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31997, 'data-value': derived.doubled }, children);
}
export default Component31997;
