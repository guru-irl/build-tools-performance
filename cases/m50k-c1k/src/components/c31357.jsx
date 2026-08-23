import React from 'react';
const LABEL_31357 = 'component_31357';
export function Component31357({ value = 31357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31357, 'data-value': derived.doubled }, children);
}
export default Component31357;
