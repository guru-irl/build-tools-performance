import React from 'react';
const LABEL_42968 = 'component_42968';
export function Component42968({ value = 42968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42968, 'data-value': derived.doubled }, children);
}
export default Component42968;
