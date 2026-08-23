import React from 'react';
const LABEL_31341 = 'component_31341';
export function Component31341({ value = 31341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31341, 'data-value': derived.doubled }, children);
}
export default Component31341;
