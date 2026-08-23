import React from 'react';
const LABEL_9679 = 'component_9679';
export function Component9679({ value = 9679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9679, 'data-value': derived.doubled }, children);
}
export default Component9679;
