import React from 'react';
const LABEL_31603 = 'component_31603';
export function Component31603({ value = 31603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31603, 'data-value': derived.doubled }, children);
}
export default Component31603;
