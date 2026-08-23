import React from 'react';
const LABEL_32227 = 'component_32227';
export function Component32227({ value = 32227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32227, 'data-value': derived.doubled }, children);
}
export default Component32227;
