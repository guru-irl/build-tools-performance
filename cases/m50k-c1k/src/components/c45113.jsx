import React from 'react';
const LABEL_45113 = 'component_45113';
export function Component45113({ value = 45113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45113, 'data-value': derived.doubled }, children);
}
export default Component45113;
