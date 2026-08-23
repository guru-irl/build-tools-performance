import React from 'react';
const LABEL_31408 = 'component_31408';
export function Component31408({ value = 31408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31408, 'data-value': derived.doubled }, children);
}
export default Component31408;
