import React from 'react';
const LABEL_31688 = 'component_31688';
export function Component31688({ value = 31688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31688, 'data-value': derived.doubled }, children);
}
export default Component31688;
