import React from 'react';
const LABEL_18542 = 'component_18542';
export function Component18542({ value = 18542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18542, 'data-value': derived.doubled }, children);
}
export default Component18542;
