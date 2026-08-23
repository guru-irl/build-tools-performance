import React from 'react';
const LABEL_42908 = 'component_42908';
export function Component42908({ value = 42908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42908, 'data-value': derived.doubled }, children);
}
export default Component42908;
