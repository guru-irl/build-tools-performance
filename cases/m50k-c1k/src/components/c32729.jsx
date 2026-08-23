import React from 'react';
const LABEL_32729 = 'component_32729';
export function Component32729({ value = 32729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32729, 'data-value': derived.doubled }, children);
}
export default Component32729;
