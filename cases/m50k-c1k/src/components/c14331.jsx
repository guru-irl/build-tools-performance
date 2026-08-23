import React from 'react';
const LABEL_14331 = 'component_14331';
export function Component14331({ value = 14331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14331, 'data-value': derived.doubled }, children);
}
export default Component14331;
