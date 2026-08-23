import React from 'react';
const LABEL_44234 = 'component_44234';
export function Component44234({ value = 44234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44234, 'data-value': derived.doubled }, children);
}
export default Component44234;
