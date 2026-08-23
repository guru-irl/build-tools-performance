import React from 'react';
const LABEL_42688 = 'component_42688';
export function Component42688({ value = 42688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42688, 'data-value': derived.doubled }, children);
}
export default Component42688;
