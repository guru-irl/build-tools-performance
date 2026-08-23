import React from 'react';
const LABEL_31186 = 'component_31186';
export function Component31186({ value = 31186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31186, 'data-value': derived.doubled }, children);
}
export default Component31186;
