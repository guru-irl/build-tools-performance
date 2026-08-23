import React from 'react';
const LABEL_18688 = 'component_18688';
export function Component18688({ value = 18688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18688, 'data-value': derived.doubled }, children);
}
export default Component18688;
