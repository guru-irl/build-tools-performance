import React from 'react';
const LABEL_31755 = 'component_31755';
export function Component31755({ value = 31755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31755, 'data-value': derived.doubled }, children);
}
export default Component31755;
