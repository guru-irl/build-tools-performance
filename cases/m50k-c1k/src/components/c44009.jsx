import React from 'react';
const LABEL_44009 = 'component_44009';
export function Component44009({ value = 44009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44009, 'data-value': derived.doubled }, children);
}
export default Component44009;
