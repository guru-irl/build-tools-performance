import React from 'react';
const LABEL_46044 = 'component_46044';
export function Component46044({ value = 46044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46044, 'data-value': derived.doubled }, children);
}
export default Component46044;
