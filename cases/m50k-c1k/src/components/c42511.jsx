import React from 'react';
const LABEL_42511 = 'component_42511';
export function Component42511({ value = 42511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42511, 'data-value': derived.doubled }, children);
}
export default Component42511;
