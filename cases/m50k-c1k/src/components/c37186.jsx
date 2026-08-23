import React from 'react';
const LABEL_37186 = 'component_37186';
export function Component37186({ value = 37186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37186, 'data-value': derived.doubled }, children);
}
export default Component37186;
