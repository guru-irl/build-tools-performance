import React from 'react';
const LABEL_26510 = 'component_26510';
export function Component26510({ value = 26510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26510, 'data-value': derived.doubled }, children);
}
export default Component26510;
