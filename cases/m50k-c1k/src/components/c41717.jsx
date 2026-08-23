import React from 'react';
const LABEL_41717 = 'component_41717';
export function Component41717({ value = 41717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41717, 'data-value': derived.doubled }, children);
}
export default Component41717;
