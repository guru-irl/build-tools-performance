import React from 'react';
const LABEL_31909 = 'component_31909';
export function Component31909({ value = 31909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31909, 'data-value': derived.doubled }, children);
}
export default Component31909;
