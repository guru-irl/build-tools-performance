import React from 'react';
const LABEL_28331 = 'component_28331';
export function Component28331({ value = 28331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28331, 'data-value': derived.doubled }, children);
}
export default Component28331;
