import React from 'react';
const LABEL_31569 = 'component_31569';
export function Component31569({ value = 31569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31569, 'data-value': derived.doubled }, children);
}
export default Component31569;
