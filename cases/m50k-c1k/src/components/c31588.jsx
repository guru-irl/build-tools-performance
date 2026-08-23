import React from 'react';
const LABEL_31588 = 'component_31588';
export function Component31588({ value = 31588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31588, 'data-value': derived.doubled }, children);
}
export default Component31588;
