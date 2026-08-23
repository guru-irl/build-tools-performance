import React from 'react';
const LABEL_18481 = 'component_18481';
export function Component18481({ value = 18481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18481, 'data-value': derived.doubled }, children);
}
export default Component18481;
