import React from 'react';
const LABEL_11717 = 'component_11717';
export function Component11717({ value = 11717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11717, 'data-value': derived.doubled }, children);
}
export default Component11717;
