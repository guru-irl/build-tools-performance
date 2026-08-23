import React from 'react';
const LABEL_44840 = 'component_44840';
export function Component44840({ value = 44840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44840, 'data-value': derived.doubled }, children);
}
export default Component44840;
