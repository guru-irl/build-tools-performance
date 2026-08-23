import React from 'react';
const LABEL_41148 = 'component_41148';
export function Component41148({ value = 41148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41148, 'data-value': derived.doubled }, children);
}
export default Component41148;
