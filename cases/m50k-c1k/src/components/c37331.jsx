import React from 'react';
const LABEL_37331 = 'component_37331';
export function Component37331({ value = 37331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37331, 'data-value': derived.doubled }, children);
}
export default Component37331;
