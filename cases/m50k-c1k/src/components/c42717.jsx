import React from 'react';
const LABEL_42717 = 'component_42717';
export function Component42717({ value = 42717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42717, 'data-value': derived.doubled }, children);
}
export default Component42717;
