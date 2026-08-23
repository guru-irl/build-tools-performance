import React from 'react';
const LABEL_26713 = 'component_26713';
export function Component26713({ value = 26713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26713, 'data-value': derived.doubled }, children);
}
export default Component26713;
