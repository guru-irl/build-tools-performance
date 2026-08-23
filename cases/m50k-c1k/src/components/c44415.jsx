import React from 'react';
const LABEL_44415 = 'component_44415';
export function Component44415({ value = 44415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44415, 'data-value': derived.doubled }, children);
}
export default Component44415;
