import React from 'react';
const LABEL_44118 = 'component_44118';
export function Component44118({ value = 44118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44118, 'data-value': derived.doubled }, children);
}
export default Component44118;
