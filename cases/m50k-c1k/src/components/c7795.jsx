import React from 'react';
const LABEL_7795 = 'component_7795';
export function Component7795({ value = 7795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7795, 'data-value': derived.doubled }, children);
}
export default Component7795;
