import React from 'react';
const LABEL_14044 = 'component_14044';
export function Component14044({ value = 14044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14044, 'data-value': derived.doubled }, children);
}
export default Component14044;
