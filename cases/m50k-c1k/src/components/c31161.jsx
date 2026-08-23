import React from 'react';
const LABEL_31161 = 'component_31161';
export function Component31161({ value = 31161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31161, 'data-value': derived.doubled }, children);
}
export default Component31161;
