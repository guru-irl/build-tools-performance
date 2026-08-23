import React from 'react';
const LABEL_31812 = 'component_31812';
export function Component31812({ value = 31812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31812, 'data-value': derived.doubled }, children);
}
export default Component31812;
