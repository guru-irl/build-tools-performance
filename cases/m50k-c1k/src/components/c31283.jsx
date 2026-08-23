import React from 'react';
const LABEL_31283 = 'component_31283';
export function Component31283({ value = 31283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31283, 'data-value': derived.doubled }, children);
}
export default Component31283;
