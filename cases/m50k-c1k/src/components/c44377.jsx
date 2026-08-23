import React from 'react';
const LABEL_44377 = 'component_44377';
export function Component44377({ value = 44377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44377, 'data-value': derived.doubled }, children);
}
export default Component44377;
