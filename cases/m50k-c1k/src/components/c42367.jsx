import React from 'react';
const LABEL_42367 = 'component_42367';
export function Component42367({ value = 42367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42367, 'data-value': derived.doubled }, children);
}
export default Component42367;
