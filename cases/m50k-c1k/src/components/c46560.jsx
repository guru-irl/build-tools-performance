import React from 'react';
const LABEL_46560 = 'component_46560';
export function Component46560({ value = 46560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46560, 'data-value': derived.doubled }, children);
}
export default Component46560;
