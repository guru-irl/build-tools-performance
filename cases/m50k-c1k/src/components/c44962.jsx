import React from 'react';
const LABEL_44962 = 'component_44962';
export function Component44962({ value = 44962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44962, 'data-value': derived.doubled }, children);
}
export default Component44962;
