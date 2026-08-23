import React from 'react';
const LABEL_7729 = 'component_7729';
export function Component7729({ value = 7729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7729, 'data-value': derived.doubled }, children);
}
export default Component7729;
