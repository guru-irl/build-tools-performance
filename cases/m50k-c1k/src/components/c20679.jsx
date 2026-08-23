import React from 'react';
const LABEL_20679 = 'component_20679';
export function Component20679({ value = 20679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20679, 'data-value': derived.doubled }, children);
}
export default Component20679;
