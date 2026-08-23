import React from 'react';
const LABEL_28044 = 'component_28044';
export function Component28044({ value = 28044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28044, 'data-value': derived.doubled }, children);
}
export default Component28044;
