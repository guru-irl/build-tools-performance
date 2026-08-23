import React from 'react';
const LABEL_31121 = 'component_31121';
export function Component31121({ value = 31121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31121, 'data-value': derived.doubled }, children);
}
export default Component31121;
