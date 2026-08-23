import React from 'react';
const LABEL_31465 = 'component_31465';
export function Component31465({ value = 31465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31465, 'data-value': derived.doubled }, children);
}
export default Component31465;
