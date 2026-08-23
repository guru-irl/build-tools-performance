import React from 'react';
const LABEL_7688 = 'component_7688';
export function Component7688({ value = 7688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7688, 'data-value': derived.doubled }, children);
}
export default Component7688;
