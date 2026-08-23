import React from 'react';
const LABEL_31968 = 'component_31968';
export function Component31968({ value = 31968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31968, 'data-value': derived.doubled }, children);
}
export default Component31968;
