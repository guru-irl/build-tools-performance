import React from 'react';
const LABEL_8044 = 'component_8044';
export function Component8044({ value = 8044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8044, 'data-value': derived.doubled }, children);
}
export default Component8044;
