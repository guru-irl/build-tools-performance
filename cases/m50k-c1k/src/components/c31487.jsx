import React from 'react';
const LABEL_31487 = 'component_31487';
export function Component31487({ value = 31487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31487, 'data-value': derived.doubled }, children);
}
export default Component31487;
