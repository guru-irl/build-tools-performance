import React from 'react';
const LABEL_31774 = 'component_31774';
export function Component31774({ value = 31774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31774, 'data-value': derived.doubled }, children);
}
export default Component31774;
